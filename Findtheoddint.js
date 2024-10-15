function findOdd(A) {
    let odd = 0;
    A.forEach(function(e) {
      if (A.filter(i => i === e).length % 2 !== 0) {
        odd = e;
      }
    });
    return odd;
  }