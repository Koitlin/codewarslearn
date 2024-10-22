function change(char, shift) {
    let code = char.codePointAt();
    let shCode = code + shift;
    if (code >= 65 && code <= 90) {
        if (!(shCode >= 65 && shCode <= 90)) {
            shift > 0 ? shCode -= 26 : shCode += 26;
        }
    } else if (code >= 97 && code <= 122) {
        if (!(shCode >= 97 && shCode <= 122)) {
            shift > 0 ? shCode -= 26 : shCode += 26;
        }
    } else { return char; }
    return String.fromCodePoint(shCode);
}

function encodeStr(s, shift) {
    let first = s[0].toLowerCase();
    let second = change(first, shift);
    let str = first + second + s.split('').map(char => change(char, shift)).join('');
    let seg = Math.ceil(str.length / 5);
    let res = [];
    for (let i = 0; i < str.length; i += seg) {
        res.push(str.substr(i, seg));
    }
    return res;
}

function decode(arr) {
    let shift = arr[0].codePointAt(1) - arr[0].codePointAt(0);
    return arr.join('').slice(2).split('').map(char => change(char, -shift)).join('');
}