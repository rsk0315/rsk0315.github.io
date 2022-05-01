import { succ, CalcStack, Operator } from "mod-calculator";

const qmod = location.search.match(/\bmod=(\d+)\b/);
const mod = (qmod != null)? BigInt(qmod[1]): 998244353n;
const calcStack = CalcStack.new(mod);

const eventListeners = {
    'int-0': [['0'], 0n],
    'int-1': [['1'], 1n],
    'int-2': [['2'], 2n],
    'int-3': [['3'], 3n],
    'int-4': [['4'], 4n],
    'int-5': [['5'], 5n],
    'int-6': [['6'], 6n],
    'int-7': [['7'], 7n],
    'int-8': [['8'], 8n],
    'int-9': [['9'], 9n],

    'unary-sqrt': [['v'], Operator.Sqrt],
    'unary-factorial': [['!'], Operator.Factorial],
    'unary-reciprocal': [['r', 'i'], Operator.Reciprocal],

    'binary-add': [['+'], Operator.Add],
    'binary-sub': [['-'], Operator.Sub],
    'binary-mul': [['*'], Operator.Mul],
    'binary-div': [['/'], Operator.Div],
    'binary-pow': [['^'], Operator.Pow],
    'binary-dlog': [['d', 'l'], Operator.DLog],
    'binary-ackermann': [['A', 'a'], Operator.Ackermann],
    'binary-binom': [['C', 'c'], Operator.Binom],
    'binary-perm': [['P', 'p'], Operator.Perm],
    'binary-tetration': [['t'], Operator.Tetration],

    'nullary-enter': [
        ['=', 'Enter'],
        Operator.Enter,
    ],
    'nullary-clear': [
        ['Backspace'],
        Operator.Clear,
    ],
};

window.onload = function() {
    const modElt = document.getElementById('mod');
    const modMessage = calcStack.mod_message();
    modElt.innerHTML = (
        katex.renderToString(`m = ${mod}`)
            + (modMessage? `, ${modMessage}`: '')
    );
    const r = e => renderMathInElement(e, KaTeXOptions);

    const keyToElt = {};
    const lhsElt = document.getElementById('lhs');
    const rhsElt = document.getElementById('rhs');
    const errElt = document.getElementById('err');
    for (let id of Object.keys(eventListeners)) {
        const [keyList, operand] = eventListeners[id];
        const elt = document.getElementById(id);
        elt.addEventListener('click', () => {
            let res;
            switch (id.split('-', 1)[0]) {
            case 'int':
                res = calcStack.put_int(operand);
                break;
            case 'unary':
                res = calcStack.unary(operand);
                break;
            case 'binary':
                res = calcStack.binary(operand);
                break;
            case 'nullary':
                res = calcStack.nullary(operand);
                break;
            default:
                console.log(id.split('-', 1)[0]);
            }
            lhsElt.innerHTML = `$${res.lhs()}$`;
            rhsElt.innerHTML = `$${calcStack.get()}$`;
            errElt.innerHTML = res.err();

            r(lhsElt);
            r(rhsElt);
            r(errElt);
        });
        for (let key of keyList) {
            keyToElt[key] = elt;
        }
    }

    document.addEventListener('keydown', ev => {
        if (ev.metaKey) return;
        let elt = keyToElt[ev.key];
        if (typeof elt === 'undefined') return;
        elt.click();
    });

    Array.from(document.getElementsByTagName('table')).forEach(e => {
        e.scrollLeft = 10000; // rightmost
    });
};
