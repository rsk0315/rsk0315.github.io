const TERMINAL_DECO = `
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
  <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
    <circle cx="6" cy="6" r="5.5" fill="#FF5F56" stroke="#E0443E" stroke-width=".5" />
    <circle cx="24" cy="6" r="5.5" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5" />
    <circle cx="42" cy="6" r="5.5" fill="#27C93F" stroke="#1AAB29" stroke-width=".5" />
  </g>
</svg>
`;

function setEventListener() {
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
}

window.onload = function() {
    [...document.getElementsByClassName('terminal-deco')].forEach(e => {
        e.innerHTML = TERMINAL_DECO;
    });
    setEventListener();
}

function copyToClipboard(text) {
    let cb = document.getElementById('clipboard');
    cb.value = text;
    navigator.clipboard.writeText(text);
}
