function markup(code, elt) {
  let out = "";
  let indent = [0];
  let lineno = 0;
  let opening = false;
  let opened = false;
  let keep = false;

  const RE = /(?:\$(?<TEX>(?:\\.|[^$\\])+)\$)|(?<KW>[\w-]+)/g;
  const INDENT = /^ */;

  for (const line of code.split("\n")) {
    let cur = "";
    let len = line.match(INDENT)[0].length;
    if (len === line.length) {
      continue;
    }

    if (indent[indent.length - 1] < len) {
      indent.push(len);
    } else if (indent[indent.length - 1] > len) {
      indent.pop();
    }

    for (const match of line.matchAll(RE)) {
      if (cur !== "") {
        cur += "\\;";
      }

      if (match.groups.TEX) {
        cur += `${match.groups.TEX}`;
      } else if (match.groups.KW) {
        if (["function"].includes(match.groups.KW)) {
          opening = true;
        }
        if (/\b(?:const|let|global)/.test(match.groups.KW)) {
          keep = true;
        }
        cur += `\\text{\\textbf{${match.groups.KW}}}`;
      }
    }

    if (cur !== "") {
      if (lineno > 0) {
        out += "\\\\\n";
      }

      if (keep) {
        out += " \\quad".repeat(indent.length - 1);
      } else if (!opening) {
        out += `\\qquad {\\scriptsize ${++lineno}}{\\scriptsize\\colon} &`;
        out += " \\quad".repeat(indent.length - 1);
      }
      if (opening) {
        if (opened) {
          out += "\n\\end{aligned}\\\\\n";
          lineno = 0;
        }
        out += `& ${cur} \\\\\n`;
        out += "&\\begin{aligned}\n";
        opened = true;
      } else if (keep && !opened) {
        out += `& ${cur} \\\\\n`;
      } else {
        out += ` ${cur}`;
      }
    }

    keep = false;
    opening = false;
  }

  if (opened) {
    out += "\n\\end{aligned}";
  }

  const inner = katex.renderToString(`\\begin{aligned}${out}\\end{aligned}`, { macros });
  elt.outerHTML = `<div><span class="pseudocode">${inner}</span></div>`;
}

document.addEventListener('DOMContentLoaded', (() => {
  [...document.getElementsByTagName('pre')]
    .filter((pre) => pre.getAttribute('data-lang') === 'pseudocode')
    .forEach((pre) => {
      markup(pre.innerText, pre);
    });
}));
