const TERMINAL_DECO = `
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
  <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
    <circle cx="6" cy="6" r="5.5" fill="#FF5F56" stroke="#E0443E" stroke-width=".5" />
    <circle cx="24" cy="6" r="5.5" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5" />
    <circle cx="42" cy="6" r="5.5" fill="#27C93F" stroke="#1AAB29" stroke-width=".5" />
  </g>
</svg>
`;

const TERMINAL_HEADER = `
<div class="terminal-header">
  <span class="terminal-deco">${TERMINAL_DECO}</span>
  <span class="copy-button-whole">
    <span class="copy-button-only-input"></span>
  </span>
  <span class="terminal-tooltip"></span>
</div>
`;

function escapeCode(raw: string): string {
    return raw.replace(/(\r\n|[\r\n])+$/, '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
}

function renderTerminalInternal(
    preTag: HTMLElement,
    iMarker: string,
    oMarker: string,
    lines: string[],
) {
    let html = '';
    // let ps1 = '<span class="ps1"></span><span class="ps1-tooltip"></span>';
    let [openInput, openOutput, closeInput, closeOutput] = [
        '<kbd class="input language-bash">',
        '<samp class="output language-plaintext">',
        '</kbd>\n',
        '</samp>\n'
    ];
    let close = '';
    for (let line of lines) {
        if (line.startsWith(iMarker)) {
            html += close;
            html += `${openInput}${line.slice(iMarker.length)}`;
            close = closeInput;
        } else if (line.startsWith(oMarker)) {
            html += close;
            html += `${openOutput}${line.slice(oMarker.length)}`;
            close = closeOutput;
        } else if (close === closeInput) {
            html += `\n${line}`;
        } else if (close === closeOutput) {
            html += `\n${line}`;
        } else {
            html += line; // ?
        }
    }
    preTag.innerHTML = html;
    preTag.classList.add('terminal');

    let div = document.createElement('div');
    preTag.parentElement.insertBefore(div, preTag);
    div.innerHTML = TERMINAL_HEADER;
    div.appendChild(preTag);
    
    /*
      div
        .terminal-header
          span.terminal-deco
          span.copy-button-whole
            span.copy-button-only-input
          span.terminal-tooltip
        pre.terminal
          code.input
          code.output
          ...
     */
}

function renderTerminal() {
    Array.from(document.getElementsByClassName('language-terminal')).forEach(e => {
        let lines = escapeCode((e as HTMLElement).innerText).split('\n');
        renderTerminalInternal(e.parentElement, '% ', '', lines);
    });
    Array.from(document.getElementsByClassName('language-terminal-marker')).forEach(e => {
        let lines = escapeCode((e as HTMLElement).innerText).split('\n');
        let iMarker = lines[0];
        let oMarker = lines[1];
        renderTerminalInternal(e.parentElement, iMarker, oMarker, lines.slice(2));
    });
}

function addPrompt(kbdTag: HTMLElement) {
    kbdTag.innerHTML = kbdTag.innerHTML.replace(
        /^/, '<span class="ps1"></span><span class="ps1-tooltip"></span>'
    );
    kbdTag.innerHTML = kbdTag.innerHTML.replaceAll('\n', '\n<span class="ps2"></span>');
}

function addCopyButtonToCode() {
    Array.from(document.getElementsByTagName('pre')).forEach(e => {
        if (e.classList.contains('terminal')) return;

        let div = document.createElement('div');
        div.style.position = 'relative';
        e.parentElement.insertBefore(div, e);
        div.innerHTML += '<span class="copy-button" data-text="Copy"></span>';
        div.innerHTML += '<span class="pre-tooltip" data-text="Copied"></span>';
        div.appendChild(e);
    });
}

function addEventListenerToCopyButton() {
    const COOL_TIME = 1250; // ms

    Array.from(document.getElementsByClassName('ps1')).forEach(e => {
        e.addEventListener('click', ev => {
            let elt = ev.srcElement as HTMLElement;
            let tooltip = elt.nextElementSibling;
            tooltip.classList.remove('copied');
            let input = elt.parentElement.innerText;
            copyToClipboard(input);
            tooltip.classList.add('copied');
            setTimeout(() => tooltip.classList.remove('copied'), COOL_TIME);
        });
    });

    Array.from(document.getElementsByClassName('copy-button-whole')).forEach(e => {
        e.addEventListener('click', ev => {
            let elt = ev.srcElement as HTMLElement;
            let onlyInput = elt.classList.contains('copy-button-only-input');
            let tooltip = (onlyInput? elt.parentElement: elt).nextElementSibling;
            tooltip.classList.remove('copied');

            let tooltipText = `${onlyInput? 'Commands': 'All lines'} copied.`;
            tooltip.setAttribute('data-text', tooltipText);

            console.log(tooltip);
            let terminal = tooltip.parentElement.nextElementSibling as HTMLElement;
            console.log(terminal);
            if (onlyInput) {
                let input = Array.from(terminal.querySelectorAll('kbd.input'))
                    .map(e => (e as HTMLElement).innerText).join('\n');
                copyToClipboard(input);
            } else {
                let input = Array.from(terminal.children)
                    .map(e => {
                        let text = (e as HTMLElement).innerText;
                        return (e.tagName === 'KBD')? `% ${text}`: text;
                    }).join('\n');
                copyToClipboard(input);
            }
            tooltip.classList.add('copied');
            setTimeout(() => tooltip.classList.remove('copied'), COOL_TIME);
        });
    });

    Array.from(document.getElementsByClassName('copy-button')).forEach(e => {
        e.addEventListener('click', ev => {
            let elt = ev.srcElement as HTMLElement;
            elt.classList.add('copied');
            let input = elt.parentElement.innerText;
            copyToClipboard(input);
            elt.setAttribute('data-text', '');
            elt.innerHTML = '<i class="fa-solid fa-check"></i>';
            setTimeout(() => {
                elt.classList.remove('copied');
                elt.setAttribute('data-text', 'Copy');
                elt.innerHTML = '';
            }, COOL_TIME);
        });
    });
}

function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
}
