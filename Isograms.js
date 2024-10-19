function isIsogram(str) {
    return str.toLowerCase().split('').sort().filter((e, i, a) => e == a[i + 1]).length == 0;
}