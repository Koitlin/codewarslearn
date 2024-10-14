function pigIt(str) {
    return str.split(' ').map(function (word) {
        if (!".,!?".includes(word)) {
            let arr = word.split('');
            arr.push(arr.shift(), "a", "y");
            return arr.join('');
        } else {
            return word;
        }
    }).join(' ');
}