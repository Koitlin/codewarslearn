function countRepeats(str) {
    return str.length - str.split('').map((c, i, a) => (c === a[i + 1] ? '' : c)).join('').length;
  }