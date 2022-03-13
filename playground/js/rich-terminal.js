const TERMINAL_DECO = `
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
  <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
    <circle cx="6" cy="6" r="5.5" fill="#FF5F56" stroke="#E0443E" stroke-width=".5" />
    <circle cx="24" cy="6" r="5.5" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5" />
    <circle cx="42" cy="6" r="5.5" fill="#27C93F" stroke="#1AAB29" stroke-width=".5" />
  </g>
</svg>
`;

const SAMPLE_INPUT = [
    '% ', // 入力のマーカー
    '', // 出力のマーカー
    '% echo foo bar',
    'foo bar',
    '% echo baz qux',
    'baz qux',
].join('\n');

function setEventListener() {
    {
        let elt = window.document.getElementById('input');
        let label = window.document.getElementById('input-label');
        elt.addEventListener('focus', () => label.classList.add('focused'));
        elt.addEventListener('focusout', () => label.classList.remove('focused'));
    }

    [...document.getElementsByTagName('kbd')]
        .filter(e => e.className.split(' ').includes('input'))
        .forEach(e => {
            e.innerHTML = `<span class="ps1"></span><span class="ps1-tooltip"></span>${e.innerHTML}`;
        });
    [...document.getElementsByClassName('ps1')].forEach(e => {
        e.addEventListener('click', ev => {
            let elt = ev.srcElement;
            let tooltip = elt.nextElementSibling;
            tooltip.classList.remove('copied');
            let input = elt.parentElement.innerText;
            copyToClipboard(input);
            tooltip.classList.add('copied');
            setTimeout(() => tooltip.classList.remove('copied'), 1250);
        });
    });
    [...document.getElementsByClassName('copy-button-whole')].forEach(e => {
        e.addEventListener('click', ev => {
            let elt = ev.srcElement;
            let onlyInput = [...elt.classList].includes('copy-button-only-input');
            let tooltip = (onlyInput? elt.parentElement: elt).nextElementSibling;
            tooltip.classList.remove('copied');

            let tooltipText = onlyInput? 'Commands copied.': 'All lines copied.';
            tooltip.setAttribute('data-text', tooltipText);

            let terminal = tooltip.parentElement.nextElementSibling.firstChild;
            let input;
            if (onlyInput) {
                input = [...terminal.querySelectorAll('kbd.input')]
                    .map(e => e.innerText).join('\n');
                copyToClipboard(input);
                tooltip.classList.add('copied');
                setTimeout(() => tooltip.classList.remove('copied'), 1250);
            } else {
                input = [...terminal.children]
                    .map(e => (e.tagName === 'KBD')? `% ${e.innerText}`: e.innerText).join('\n');
                copyToClipboard(input);
                tooltip.classList.add('copied');
                setTimeout(() => tooltip.classList.remove('copied'), 1250);
            }
        });
    });
    [...document.getElementsByClassName('copyable')].forEach(e => {
        let parent = e.parentElement;
        parent.innerHTML = `<div style="position: relative">
<span class="copy-button" data-text="Copy"></span>
<span class="pre-tooltip" data-text="Copied"></span>
</div>
${e.outerHTML}`;
    });
    [...document.getElementsByClassName('copy-button')].forEach(e => {
        e.addEventListener('click', ev => {
            let elt = ev.srcElement;
            let tooltip = elt.nextElementSibling;
            tooltip.classList.remove('copied');
            let input = elt.parentElement.parentElement.innerText;
            copyToClipboard(input);
            // tooltip.classList.add('copied'); // これどうしよう
            elt.setAttribute('data-text', '\u2713');
            setTimeout(() => {
                tooltip.classList.remove('copied');
                elt.setAttribute('data-text', 'Copy');
            }, 1250);
        });
    });
}

window.onload = function() {
    load();
    [...document.getElementsByClassName('terminal-deco')].forEach(e => {
        e.innerHTML = TERMINAL_DECO;
    });
    render();
    document.getElementById('input').focus();
}

function copyToClipboard(text) {
    let cb = document.getElementById('clipboard');
    cb.value = text;
    navigator.clipboard.writeText(text);
}

function render() {
    let input = document.getElementById('input').value
        .replace(/(\r\n|[\r\n])+$/, '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .split('\n');
    let inputMarker = input[0];
    let outputMarker = input[1];
    let text = '';
    let close = '';
    for (let i = 2; i < input.length; ++i) {
        // コピペしたときに改行が入ると嫌なので、末尾の改行は <kbd> や <samp> の外に置きたい。
        // ただし、行継続のたびにマーカーを置きたくはないので、マーカーがないときは改行が欲しい。

        let line = input[i];
        if (line.startsWith(inputMarker)) {
            text += close;
            text += `<kbd class="input">${line.slice(inputMarker.length)}`;
            close = '</kbd>\n';
        } else if (line.startsWith(outputMarker)) {
            text += close;
            text += `<samp class="output">${line.slice(outputMarker.length)}`;
            close = '</samp>\n';
        } else {
            text += `\n${line}`;
        }
    }
    text += close;
    document.getElementById('terminal').innerHTML = text;
    setEventListener();
}

function store() {
    let input = document.getElementById('input').value;
    localStorage.setItem('input', input);
}

function load() {
    let input = localStorage.getItem('input') ?? SAMPLE_INPUT;
    document.getElementById('input').value = input;
}
