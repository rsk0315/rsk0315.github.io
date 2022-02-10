const ALPHABET = '0123456789ABCDEF';
const [CORRECT, PRESENT, ABSENT, EMPTY] = [0, 1, 2, 3];
const MAX_ATTEMPT = 10;

let done = false;
let shareText = '';

function decodeResult(x) {
    return ['correct', 'present', 'absent', 'empty'][x];
}

function decodeResultEmoji(x) {
    return ['%F0%9F%9F%A9', '%F0%9F%9F%A8', '%E2%AC%9C%EF%B8%8F'][x];
}

function colorize(actual, result) {
    return actual.split('')
        .map((c, i) => `<div class="tile tile-${decodeResult(result[i])}">${c}</div>`)
        .join('');
}

function colorizeEmoji(result) {
    return result.map(x => decodeResultEmoji(x)).join('');
}

function toUtf8(str) {
    if (str === '') return new ArrayBuffer(0);

    let u8Array = encodeURIComponent(str).match(/%..|./g).map(c => {
        if (c.length === 1) {
            return c.codePointAt(0);
        } else {
            return parseInt(c.substr(1), 16);
        }
    });
    let n = u8Array.length;
    let array = new ArrayBuffer(n);
    let view = new Uint8Array(array);
    for (let i = 0; i < n; ++i) view[i] = u8Array[i];
    return array;
}

function randomInt(n) {
    return Math.floor(Math.random() * n);
}

function randomPassword() {
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let digits = '0123456789';
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let s = letters.repeat(7) + digits.repeat(4) + punctuation.repeat(3);
    let length = 14;
    let res = Array.from({length}, (() => s[randomInt(s.length)])).join('');
    debugger; // どうぞ
    return res;
}

async function hash(str) {
    let strUtf8 = toUtf8(str);
    let hashed = new Uint8Array(await crypto.subtle.digest('SHA-256', strUtf8));
    return [...hashed].map(e => `0${e.toString(16)}`.substr(-2)).join('').toUpperCase();
}

async function judgeEvent(expected, attempt) {
    if (done) return;
    let input = document.getElementById('input').value;
    let err = document.getElementById('err');

    let actual = await hash(input);
    let result = judge(actual, expected);

    let output = document.getElementById(`attempt-${attempt}`);
    output.innerHTML = colorize(actual, result);
    shareText += colorizeEmoji(result) + '%0A';

    let positive = result.every(e => e === CORRECT);
    let negative = attempt + 1 === MAX_ATTEMPT;
    done |= positive || negative;

    if (!done) return;

    let share = document.getElementById('share');
    share.classList.remove('share-closed');
    share.classList.add('share-open');

    if (positive) {
        shareText = `passWORDLE ${attempt + 1}/${MAX_ATTEMPT}%0A${shareText}%0A`;
    } else {
        shareText = `passWORDLE X/${MAX_ATTEMPT}%0A%0A`;
    }

    // query parameter max length とググると 2048 characters と出ました。
    // 実際には 1 回目で当てないとツイートできる長さに収まらないので消しちゃいます。
    if (/* shareText.length > 2048 */ attempt > 0 && positive) {
        shareText = `passWORDLE ${attempt + 1}/${MAX_ATTEMPT}%0A`;
    }

    share.innerHTML += `
        <a class="twitter-share-button"
           href="https://twitter.com/intent/tweet?text=${shareText}"
           data-size="large">Tweet</a>`;

    loadTwttr();
}

function judge(actual, expected) {
    let n = expected.length;
    let result = Array.from({length: n}, (() => ABSENT));
    let count = {};
    for (let c of ALPHABET) {
        count[c] = 0;
    }
    for (let c of expected) {
        count[c] += 1;
    }
    for (let i = 0; i < n; ++i) {
        if (actual[i] === expected[i]) {
            result[i] = CORRECT;
            count[actual[i]] -= 1;
        }
    }
    for (let i = 0; i < n; ++i) {
        if (result[i] === CORRECT) continue;
        if (count[actual[i]] > 0) {
            count[actual[i]] -= 1;
            result[i] = PRESENT;
        }
    }
    return result;
}

function loadTwttr() {
      window.twttr = (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0],
              t = window.twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function(f) {
              t._e.push(f);
          };

          return t;
      }(document, "script", "twitter-wjs"));
}
