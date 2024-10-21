function humanReadable (seconds) {
    let leadZero = n => ('0' + n).slice(-2);
    let h = parseInt(seconds / 3600);
    seconds -= h * 3600;
    let m = parseInt(seconds / 60);
    seconds -= m * 60;
    return `${leadZero(h)}:${leadZero(m)}:${leadZero(seconds)}`;
  }