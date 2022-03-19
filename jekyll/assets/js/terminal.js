var TERMINAL_DECO = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54\" height=\"14\" viewBox=\"0 0 54 14\">\n  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1 1)\">\n    <circle cx=\"6\" cy=\"6\" r=\"5.5\" fill=\"#FF5F56\" stroke=\"#E0443E\" stroke-width=\".5\" />\n    <circle cx=\"24\" cy=\"6\" r=\"5.5\" fill=\"#FFBD2E\" stroke=\"#DEA123\" stroke-width=\".5\" />\n    <circle cx=\"42\" cy=\"6\" r=\"5.5\" fill=\"#27C93F\" stroke=\"#1AAB29\" stroke-width=\".5\" />\n  </g>\n</svg>\n";
var TERMINAL_HEADER = "\n<div class=\"terminal-header\">\n  <span class=\"terminal-deco\">".concat(TERMINAL_DECO, "</span>\n  <span class=\"copy-button-whole\">\n    <span class=\"copy-button-only-input\"></span>\n  </span>\n  <span class=\"terminal-tooltip\"></span>\n</div>\n");
function escapeCode(raw) {
    return raw.replace(/(\r\n|[\r\n])+$/, '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
}
function renderTerminalInternal(preTag, iMarker, oMarker, lines) {
    var html = '';
    // let ps1 = '<span class="ps1"></span><span class="ps1-tooltip"></span>';
    var _a = [
        '<kbd class="input language-bash">',
        '<samp class="output language-plaintext">',
        '</kbd>\n',
        '</samp>\n'
    ], openInput = _a[0], openOutput = _a[1], closeInput = _a[2], closeOutput = _a[3];
    var close = '';
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        if (line.startsWith(iMarker)) {
            html += close;
            html += "".concat(openInput).concat(line.slice(iMarker.length));
            close = closeInput;
        }
        else if (line.startsWith(oMarker)) {
            html += close;
            html += "".concat(openOutput).concat(line.slice(oMarker.length));
            close = closeOutput;
        }
        else if (close === closeInput) {
            html += "\n".concat(line);
        }
        else if (close === closeOutput) {
            html += "\n".concat(line);
        }
        else {
            html += line; // ?
        }
    }
    preTag.innerHTML = html;
    preTag.classList.add('terminal');
    var div = document.createElement('div');
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
    Array.from(document.getElementsByClassName('language-terminal')).forEach(function (e) {
        var lines = escapeCode(e.innerText).split('\n');
        renderTerminalInternal(e.parentElement, '% ', '', lines);
    });
    Array.from(document.getElementsByClassName('language-terminal-marker')).forEach(function (e) {
        var lines = escapeCode(e.innerText).split('\n');
        var iMarker = lines[0];
        var oMarker = lines[1];
        renderTerminalInternal(e.parentElement, iMarker, oMarker, lines.slice(2));
    });
}
function addPrompt(kbdTag) {
    kbdTag.innerHTML = kbdTag.innerHTML.replace(/^/, '<span class="ps1"></span><span class="ps1-tooltip"></span>');
    kbdTag.innerHTML = kbdTag.innerHTML.replaceAll('\n', '\n<span class="ps2"></span>');
}
function addCopyButtonToCode() {
    Array.from(document.getElementsByTagName('pre')).forEach(function (e) {
        if (e.classList.contains('terminal'))
            return;
        var div = document.createElement('div');
        div.style.position = 'relative';
        e.parentElement.insertBefore(div, e);
        div.innerHTML += '<span class="copy-button" data-text="Copy"></span>';
        div.innerHTML += '<span class="pre-tooltip" data-text="Copied"></span>';
        div.appendChild(e);
    });
}
function addEventListenerToCopyButton() {
    var COOL_TIME = 1250; // ms
    Array.from(document.getElementsByClassName('ps1')).forEach(function (e) {
        e.addEventListener('click', function (ev) {
            var elt = ev.srcElement;
            var tooltip = elt.nextElementSibling;
            tooltip.classList.remove('copied');
            var input = elt.parentElement.innerText;
            copyToClipboard(input);
            tooltip.classList.add('copied');
            setTimeout(function () { return tooltip.classList.remove('copied'); }, COOL_TIME);
        });
    });
    Array.from(document.getElementsByClassName('copy-button-whole')).forEach(function (e) {
        e.addEventListener('click', function (ev) {
            var elt = ev.srcElement;
            var onlyInput = elt.classList.contains('copy-button-only-input');
            var tooltip = (onlyInput ? elt.parentElement : elt).nextElementSibling;
            tooltip.classList.remove('copied');
            var tooltipText = "".concat(onlyInput ? 'Commands' : 'All lines', " copied.");
            tooltip.setAttribute('data-text', tooltipText);
            console.log(tooltip);
            var terminal = tooltip.parentElement.nextElementSibling;
            console.log(terminal);
            if (onlyInput) {
                var input = Array.from(terminal.querySelectorAll('kbd.input'))
                    .map(function (e) { return e.innerText; }).join('\n');
                copyToClipboard(input);
            }
            else {
                var input = Array.from(terminal.children)
                    .map(function (e) {
                    var text = e.innerText;
                    return (e.tagName === 'KBD') ? "% ".concat(text) : text;
                }).join('\n');
                copyToClipboard(input);
            }
            tooltip.classList.add('copied');
            setTimeout(function () { return tooltip.classList.remove('copied'); }, COOL_TIME);
        });
    });
    Array.from(document.getElementsByClassName('copy-button')).forEach(function (e) {
        e.addEventListener('click', function (ev) {
            var elt = ev.srcElement;
            elt.classList.add('copied');
            // let tooltip = elt.nextElementSibling;
            // tooltip.classList.add('copied');
            var input = elt.parentElement.innerText;
            copyToClipboard(input);
            // elt.setAttribute('data-text', '\u2713');
            elt.setAttribute('data-text', '');
            // https://idealcommercialboilers.com/images/svg/sprites/clipboard.svg
            // elt.style.backgroundImage = '/assets/images/clipboard.svg';
            // elt.innerHTML = '<img src="/assets/images/check.svg" height="15" class="clipboard">';
            elt.innerHTML = '<i class="fa-solid fa-check"></i>';
            setTimeout(function () {
                elt.classList.remove('copied');
                // tooltip.classList.remove('copied');
                elt.setAttribute('data-text', 'Copy');
                elt.innerHTML = '';
            }, COOL_TIME);
        });
    });
}
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}
