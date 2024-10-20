function evalParentheses(parens) {
    parens = parens.replace(/\(\)/g, '1+');
    while (parens.includes("(")) {
        parens = parens.replace(/(\d+\+)+/g, nums => nums.slice(0, -1).split('+').reduce((sum, num) => Number(sum) + Number(num)) + '+');
        parens = parens.replace(/\(\d+\+\)/g, num => Number(num.slice(1, -2)) * 2 + '+');
    }
    parens = parens.slice(0, -1).split('+').reduce((sum, num) => Number(sum) + Number(num));
    return Number(parens);
}