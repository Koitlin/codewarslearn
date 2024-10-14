function squareDigits(num) {

    return +num.toString().split('').map(n => n ** 2).join('');
}