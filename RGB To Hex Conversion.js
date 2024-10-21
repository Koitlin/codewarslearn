function rgb(r, g, b) {
    let rnd = n => n < 0 ? '00' : n > 255 ? 'ff' : n.toString(16);
    let pad = n => ('0' + rnd(n)).slice(-2).toUpperCase();
    return pad(r) + pad(g) + pad(b);
}