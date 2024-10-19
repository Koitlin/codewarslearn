function XO(str) {
    xCount = 0;
    oCount = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") {
            xCount++;
        } else if (str[i].toLowerCase() === "o") {
            oCount++;
        }
    }
    return oCount === xCount;
}