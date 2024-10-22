function duplicateCount(text){
    let dupCount = 0;
    let isDup = false;
    text.toLowerCase().split('').sort().forEach((e, i, a) => {
      if (e == a[i + 1]) { if (!isDup) dupCount++; }
      isDup = e == a[i + 1];
    });
    return dupCount;
  }