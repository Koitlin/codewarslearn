function digitalRoot(n) {
    while (n > 9) {
      n = n.toString().split ('').reduce ((a, b) => Number (a) + Number (b));
    }
    return n;
  }