const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    'gap': ' ',
};

function decode(expr) {
    // write your solution here
    let morseDecode = []
    let num = 0
    for (let i = 0; i < expr.length; i++) {
        if (!morseDecode[num]) {
            morseDecode[num] = '';
        }

        if (expr[i] === "0") {
            i++;
        }

        if (expr[i] === "1" && expr[i + 1] === "0") {
            morseDecode[num] += '.';
            i++;
        }

        if (expr[i] === "1" && expr[i + 1] === "1") {
            morseDecode[num] += '-';
            i++;
        }

        if ((i + 1) % 10 == 0) {
            num++;
        }

        if (expr[i] == '*') {
            morseDecode[num] = 'gap'
            i += 9;
            num++;
        }

    }
    return morseDecode.reduce((result, i) => result + MORSE_TABLE[i], '');
}
module.exports = {
    decode
}
