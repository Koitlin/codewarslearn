function incrementString (strng) {
    return strng.replace(/\d*$/, m => String(+m + 1).padStart(m.length, '0'));
  }