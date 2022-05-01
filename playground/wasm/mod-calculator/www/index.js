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
    'unary-square': [[], Operator.Square],
    'binary-plus': [['+'], Operator.Plus],

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
    modElt.innerText = `($m = ${mod}$${calcStack.prime_mod()? ', prime': ''})`;
    renderMathInElement(modElt, KaTeXOptions);

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
            lhsElt.innerText = res.lhs();
            rhsElt.innerText = calcStack.get();
            errElt.innerText = res.err();
        });
        for (let key of keyList) {
            keyToElt[key] = elt;
        }
    }

    document.addEventListener('keydown', ev => {
        let elt = keyToElt[ev.key];
        if (typeof elt === 'undefined') return;
        elt.click();
    });
};
