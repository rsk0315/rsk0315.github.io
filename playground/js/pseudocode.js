const macros = {
  '\\halfopen': '[#1, #2)',
  '\\floor': '\\lfloor #1\\rfloor',
  '\\ceil': '\\lceil #1\\rceil',
  '\\rounded': '\\lfloor #1\\rceil',
  '\\Floor': '\\left\\lfloor #1\\right\\rfloor',
  '\\Ceil': '\\left\\lceil #1\\right\\rceil',
  '\\Rounded': '\\left\\lfloor #1\\right\\rceil',
  '\\angled': '\\langle #1\\rangle',
  '\\Angled': '\\left\\langle #1\\right\\rangle',
  '\\lcm': '\\operatorname*{lcm}',
  '\\gcd': '\\operatorname*{gcd}',
  '\\poly': '\\operatorname{poly}',
  '\\polylog': '\\operatorname{polylog}',
  '\\concat': '\\mathrel{+\\!\\!+}',
  '\\mex': '\\operatorname*{mex}',
  '\\qed': '\\square',
  '\\Q': '\\mathbb{Q}',
  '\\dd': '\\mathrm{d}',
  '\\ForallL': '{}^{\\forall}#1.\\:#2',
  '\\Forall': '{}^{\\forall}#1.\\,\\left[#2\\right]',
  '\\ExistsL': '{}^{\\exists}#1.\\:#2',
  '\\Exists': '{}^{\\exists}#1.\\,\\left[#2\\right]',
  '\\roundp': '(\\kern-.2em[#1]\\kern-.2em)',
  '\\bigroundp': '\\big(\\kern-.25em\\big[#1\\big]\\kern-.25em\\big)',
  '\\Bigroundp': '\\Big(\\kern-.3em\\Big[#1\\Big]\\kern-.3em\\Big)',
  '\\biggroundp': '\\bigg(\\kern-.3em\\bigg[#1\\bigg]\\kern-.3em\\bigg)',
  '\\Biggroundp': '\\Bigg(\\kern-.35em\\Bigg[#1\\Bigg]\\kern-.35em\\Bigg)',
  '\\hfloor': '\\lfloor\\hspace{-.25em}\\lfloor#1\\rfloor\\hspace{-.25em}\\rfloor',
  '\\xgets': '\\xleftarrow{#1}',
  '\\eod': '\\blacksquare', // end of <details>
};
const KaTeXOptions = {
  delimiters: [
    {left: '$$', right: '$$', display: true},
    {left: '\\[', right: '\\]', display: true},
    {left: '$', right: '$', display: false},
    {left: '\\(', right: '\\)', display: false},
  ],
  macros: macros,
};

// ---

function split(input) {
  const res = [];
  let inside = false;
  let cur = "";
  for (const line of input.split('\n')) {
    if (line === "```") {
      if (inside) {
        res.push(cur);
        cur = "";
      }
      inside = !inside;
    } else {
      if (inside) {
        cur += line + "\n";
      }
    }
  }
  return res;
}

function modifyMessage(msg, e) {
  return `${msg} + ${e}`
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/(.)\u0332/g, '<u>$1</u>');
}

function markup(code, elt) {
  const RE = /(?:\[(?<CK>[^\]\}]+)\])|(?:\{(?<CE>.+)\})|(?<NL>\n)/g;

  let out = "$\\begin{aligned}";
  let indent = 0;
  let blank = true;
  let lineno = 0;
  let opened = false;
  let opening = false;
  for (const match of code.matchAll(RE)) {
    if (match.groups.NL) {
      out += "\\\\\n";
      blank = true;
      if (opening) {
        out += "&\\begin{aligned}";
        opening = false;
        opened = true;
      }
      continue;
    }

    if (blank) {
      if (match.groups.CK === 'function') {
        if (opened) {
          out += "\\end{aligned}\\\\\n";
          lineno = 0;
          opened = false;
        }
        opening = true;
      } else {
        if (opened) {
          out += `\\qquad{\\scriptsize ${++lineno}\\colon}`;
        }
        out += "&";
        if (match.groups.CK && match.groups.CK.startsWith('end')) {
          --indent;
        }
        out += "\\quad ".repeat(indent);
        if (match.groups.CK && !match.groups.CK.startsWith('end')) {
          if (opened && !["function", "return"].includes(match.groups.CK)) {
            ++indent;
          }
        }
      }
      blank = false;
    } else {
      out += "\\;";
    }

    if (match.groups.CK) {
      if (match.groups.CK === "function") {
        out += "&";
      }
      out += `\\text{\\textbf{${match.groups.CK}}}`;
    } else if (match.groups.CE) {
      out += ` ${match.groups.CE} `;
    }
  }
  if (opened) {
    out += "\\end{aligned}"
  }
  out += "\\end{aligned}$";

  elt.innerHTML = out;

  let err = "";
  renderMathInElement(elt, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
    ],
    macros,
    errorCallback: ((msg, e) => {
      console.error(e);
    }),
  });
  if (err) {
    elt.innerText += 'error, see console.';
  }
}

function render() {
  const input = window.document.getElementById('input');
  const inputText = input.value;

  const codeInputs = split(inputText);
  const output = window.document.getElementById('output');
  output.innerHTML = "";
  for (const code of codeInputs) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.classList.add("pseudocode");
    markup(code, span);
    div.appendChild(span);
    output.appendChild(div);
  }  
}

const CACHE_KEY = 'PseudocodeInput';

function loadCache() {
  const input = window.document.getElementById('input');
  const cache = localStorage.getItem(CACHE_KEY)
  if (cache !== null) input.value = cache;
}

function storeCache() {
  const input = window.document.getElementById('input');
  localStorage.setItem(CACHE_KEY, input.value);
}

window.onload = function() {
  const input = window.document.getElementById('input');
  input.addEventListener('input', function() {
    storeCache();
  });
  loadCache();
  render();

  for (const io of ['input', 'output']) {
    const ioEl = window.document.getElementById(io);
    const ioLabel = window.document.getElementById(`${io}-label`);
    ioEl.addEventListener('focus', function() {
      ioLabel.classList.add('focused');
    });
    ioEl.addEventListener('focusout', function() {
      ioLabel.classList.remove('focused');
    });
  }

  {
    const el = window.document.getElementById('output-label');
    renderMathInElement(el);
  }
  input.focus();
}
