function maxBisectors(n) {
    let half = Math.floor(n / 2)
    return half * (n - half);
}