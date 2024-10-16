function isValidWalk(walk) {
    let n = 0;
    let s = 0;
    let w = 0;
    let e = 0;
    if (walk.length === 10) {
      walk.forEach(function(item) {
        switch(item) {
          case 'n': n++; break;
          case 's': s++; break;
          case 'w': w++; break;
          case 'e': e++; break;
        }
      });
      return n == s && w == e;
    } else {
      return false;
    }
  }