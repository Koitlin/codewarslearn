function getCount(str) {
    return str.length - str.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o', '').replaceAll('u', '').length;
}