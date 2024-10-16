function arrayDiff(a, b) {
    let result = [];
    a.forEach(function(item) {
      if (!b.includes(item)) {
        result.push(item);
      }
    });
    return result;
  }