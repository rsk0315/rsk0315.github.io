const [
    VERTICAL,
    HORIZONTAL,
    DIAGONAL,
    CURVING,
] = [
    1 << 0,
    1 << 1,
    1 << 2,
    1 << 3,
];

function isPermutation(p) {
    let n = p.length;
    let a = Array.from({length: n}, (() => false));
    return p.every(i => {
        if (i >= n || a[i]) return false;
        a[i] = true;
        return true;
    });
}

function t(p) {
    let n = p.length;
    let p_t = Array.from({length: n});
    for (let i = 0; i < n; ++i) {
        p_t[p[i]] = i;
    }
    return p;
}

function parsePermutation(str) {
    let p = str.trim().split(/\s+/).map(x => parseInt(x));
    return (p.some(x => isNaN(x)) || !isPermutation(p))? null: p;
}

function parseRange(strStart, strEnd) {
    let start = parseInt(strStart);
    let end = parseInt(strEnd);
    return (isNaN(start) || isNaN(end))? null: [start, end];
}

function permutationToEncodedSeaweed(p) {
    let n = p.length;
    let res = Array.from({length: n}, (() => Array.from({length: n}, (() => 0))));
    let q = Array.from({length: n}, (() => Array.from({length: n}, (() => []))));
    let vertical = Array.from({length: 2 * n}, ((_, i) => (i < n)? 0: 1));
    let crossed =
        Array.from({length: 2 * n}, (() => Array.from({length: 2 * n}, (() => false))));
    let pos = Array.from({length: n}, (() => null));

    for (let i = 0; i < n; ++i) {
        q[i][0].push(n - 1 - i);
        q[0][i].push(n + i);
    }

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (p[j] === i) {
                res[i][j] |= DIAGONAL;
            }
            if (q[i][j].length == 1) {
                let [v] = q[i][j];
                if (vertical[v]) {
                    res[i][j] |= VERTICAL;
                    if (i + 1 < n) {
                        q[i + 1][j].push(v);
                    } else if (v >= n) {
                        pos[j] = v - n;
                    }
                } else {
                    res[i][j] |= HORIZONTAL;
                    if (j + 1 < n) q[i][j + 1].push(v);
                }
            } else if (q[i][j].length == 2) {
                let [u, v] = q[i][j];
                if (crossed[u][v] || p[j] == i) {
                    vertical[u] = 1 - vertical[u];
                    vertical[v] = 1 - vertical[v];
                    res[i][j] |= CURVING;
                } else {
                    crossed[u][v] = true;
                    crossed[v][u] = true;
                    res[i][j] |= HORIZONTAL | VERTICAL;
                }
                for (let uv of [u, v]) {
                    if (vertical[uv]) {
                        if (i + 1 < n) {
                            q[i + 1][j].push(uv);
                        } else if (uv >= n) {
                            pos[j] = uv - n;
                        }
                    } else {
                        if (j + 1 < n) q[i][j + 1].push(uv);
                    }
                }
            } else {
                console.error(q[i][j]);
            }
        }
    }

    return [res, pos];
}

function gridToSvg(p, a, pos) {
    let n = a.length;
    let unit = 40;
    let svg = '';
    let sw2 = 'stroke-width="2"';
    let sw1 = 'stroke-width="1"';
    let sR = 'stroke="#BFBFFA"';
    let sS = `stroke="#75FB4C" ${sw2}`;
    let sD = `stroke="#EA3323" ${sw2}`;
    let sC = `stroke="#75FB4C" fill="none" ${sw2}`;
    let tI = 'class="table-index" text-anchor="middle"';

    let r = 0.5 * unit;
    for (let i = 0; i < n; ++i) {
        let uI0 = unit * i;
        let uI = unit * (i + 0.5);
        let uI1 = unit * (i + 1);
        svg += `<text x="${-.5 * unit}" y="${uI}" ${tI}>${i}</text>`;

        for (let j = 0; j < n; ++j) {
            let uJ0 = unit * j;
            let uJ = unit * (j + 0.5);
            let uJ1 = unit * (j + 1);

            let flags = a[i][j];

            if (flags & (HORIZONTAL | VERTICAL) && flags & (DIAGONAL | CURVING)) {
                console.error('unexpected state');
            }

            if (flags & HORIZONTAL) {
                svg += `<line x1="${uJ0}" x2="${uJ1}" y1="${uI}" y2="${uI}" ${sS} />`;
            }
            if (flags & VERTICAL) {
                svg += `<line x1="${uJ}" x2="${uJ}" y1="${uI0}" y2="${uI1}" ${sS} />`;
            }
            if (flags & DIAGONAL) {
                svg += `<line x1="${uJ0}" x2="${uJ1}" y1="${uI0}" y2="${uI1}" ${sD} />`;
            }
            if (flags & CURVING) {
                svg += `<path d="M ${uJ},${uI0} A ${r} ${r} 0 0 0 ${uJ1},${uI}" ${sC} />`;
                svg += `<path d="M ${uJ0},${uI} A ${r} ${r} 0 0 1 ${uJ},${uI1}" ${sC} />`;
            }
        }
    }

    let uN = unit * n;
    for (let i = 1; i < n; ++i) {
        let uI = unit * i;
        svg += `<line x1="${uI}" x2="${uI}" y1="0" y2="${uN}" ${sR} ${sw1}" />`;
        svg += `<line x1="0" x2="${uN}" y1="${uI}" y2="${uI}" ${sR} ${sw1}" />`;
    }

    svg += `<line x1="0" x2="${uN}" y1="0" y2="0" stroke="black" ${sw2} />`;
    svg += `<line x1="0" x2="${uN}" y1="${uN}" y2="${uN}" stroke="black" ${sw2} />`;
    svg += `<line x1="0" x2="0" y1="0" y2="${uN}" stroke="black" ${sw2} />`;
    svg += `<line x1="${uN}" x2="${uN}" y1="0" y2="${uN}" stroke="black" ${sw2} />`;

    for (let j = 0; j < n; ++j) {
        let uJ = unit * (j + 0.5);
        svg += `<text x="${uJ}" y="${-.3 * unit}" ${tI}>${p[j]}</text>`;
    }

    let uN1 = unit * (n + 0.5);
    for (let j = 0; j < n; ++j) {
        let uJ = unit * (j + 0.5);
        if (pos[j] === null) continue;
        svg += `<text x="${uJ}" y="${uN1}" ${tI}>[${pos[j]}]</text>`;
    }

    return svg;
}

function naiveLisTable(a) {
    let n = a.length;
    let res = Array.from({length: n + 1}, (() => Array.from({length: n + 1})));
    for (let i = 0; i <= n; ++i) {
        for (let j = 0; j <= i; ++j) {
            res[i][j] = j - i;
        }
        let lis = naiveLis(a.slice(i));
        for (let j = i + 1; j <= n; ++j) {
            res[i][j] = lis[j - (i + 1)];
        }
    }
    return res;
}

function naiveLis(a) {
    let n = a.length;
    let seg = Array.from({length: 2 * n}, () => 0);
    let dp = Array.from({length: n});
    let ord = Array.from({length: n}, ((_, i) => i));
    ord.sort((i, j) => a[i] - a[j]);

    for (let i of ord) {
        let res = 0;
        let l = n + 0;
        let r = n + i;
        while (l < r) {
            if (l & 1) res = Math.max(seg[l++], res);
            if (r & 1) res = Math.max(seg[--r], res);
            l >>= 1;
            r >>= 1;
        }

        dp[i] = res + 1;
        i += n;
        seg[i] = res + 1;
        while (i > 1) {
            i >>= 1;
            seg[i] = Math.max(seg[i << 1 | 0], seg[i << 1 | 1]);
        }
    }

    for (let i = 1; i < n; ++i) dp[i] = Math.max(dp[i], dp[i - 1]);
    return dp;
}

function tableToSvg(a, range) {
    let n = a.length - 1;
    let unit = 40;
    let svg = '';
    let tA = 'text-anchor="middle" class="table-text"';
    let tI = 'text-anchor="middle" class="table-index"';

    for (let i = 0; i <= n; ++i) {
        let uI0 = unit * (i - 0.5);
        let uI = unit * i;
        let uI1 = unit * (i + 0.5);
        for (let j = 0; j <= n; ++j) {
            let uJ0 = unit * (j - 0.5);
            let uJ = unit * j;
            let uJ1 = unit * (j + 0.5);
            svg += `<text x="${uJ}" y="${uI}" ${tA}>${a[i][j]}</text>`;
        }
    }

    let sB = 'stroke="#0100F2"';
    let sR = 'stroke="#F5C2C1"';
    let sC = 'r="4" fill="#75FB4C" stroke="white"';
    for (let i = 0; i <= n; ++i) {
        let uI0 = unit * (i - 0.5);
        let uI = unit * i;
        let uI1 = unit * (i + 0.5);
        for (let j = 0; j <= n; ++j) {
            let uJ0 = unit * (j - 0.5);
            let uJ = unit * j;
            let uJ1 = unit * (j + 0.5);
            if (j + 1 <= n) {
                let xy = `x1="${uJ1}" x2="${uJ1}" y1="${uI0}" y2="${uI1}"`;
                if (a[i][j] + 1 === a[i][j + 1]) {
                    svg += `<line ${xy} ${sR} />`;
                } else {
                    svg += `<line ${xy} ${sB} />`;
                }
            }
            if (i - 1 >= 0) {
                let xy = `x1="${uJ0}" x2="${uJ1}" y1="${uI0}" y2="${uI0}"`;
                if (a[i][j] + 1 === a[i - 1][j]) {
                    svg += `<line ${xy} ${sR} />`;
                } else {
                    svg += `<line ${xy} ${sB} />`;
                }
            }
        }
    }

    let op = `fill="#BFBFFA" opacity="0.6" rx="${.2 * unit}"`;
    let circ = `fill="none" stroke="black" r="${.4 * unit}"`;
    if (range !== null) {
        let [start, end] = range;
        let uS = unit * start;
        let uE = unit * end;
        let uH = unit * (n - start);
        svg += `<rect x="0" y="${uS}" width="${uE}" height="${uH}" ${op} />`;
        svg += `<circle cx="${uE}" cy="${uS}" ${circ} />`;
    }

    let uN = unit * (n + 0.5);
    for (let i = 0; i <= n; ++i) {
        let uI0 = unit * (i - 0.5);
        let uI = unit * i;
        let uI1 = unit * (i + 0.5);

        for (let j = 0; j <= n; ++j) {
            let uJ0 = unit * (j - 0.5);
            let uJ = unit * j;
            let uJ1 = unit * (j + 0.5);

            if (i - 1 >= 0 && j + 1 <= n
                && a[i][j] + 1 === a[i][j + 1]
                && a[i][j] + 1 === a[i - 1][j]
                && a[i][j] + 1 === a[i - 1][j + 1]) {

                svg += `<circle cx="${uJ1}" cy="${uI0}" ${sC} />`;
                svg += `<text x="${uJ1}" y="${uN}" ${tI} >(${i - 1})</text>`;
            }
        }
    }

    for (let i = 0; i < n; ++i) {
        let uI = unit * (i + 0.5);
        svg += `<text x="${-.8 * unit}" y="${uI}" ${tI}>${i}</text>`;

        let uJ = unit * (i + 0.5);
        svg += `<text x="${uJ}" y="${-.8 * unit}" ${tI}>${i}</text>`;
    }

    return svg;
}

function getMessage(p, range, naive) {
    if (range === null) return '';
    let [i, j] = range;
    let lis = naive[i][j];
    if (i >= j) {
        return (
            `空の区間 \\([i, j)\\) の LIS score は`
                + ` \\(j-i = ${j}-${i} = ${lis}\\le 0\\) とします。`
        );
    }

    let pS = (j - i) - lis;
    return (
        `区間 \\([${i}, ${j})\\) に対応する subarray は \\((${p.slice(i, j)})\\) です。`
            + `LIS score は \\( (j-i)-P^{\\Sigma}_{i, j} = ${j - i} - ${pS} = ${lis} \\)`
            + ' です。<br>\\(j-i\\) は区間長、\\(P^{\\Sigma}_{i, j}\\)'
            + ' は網掛け部分の緑の丸の個数に対応します。'
    );
}
