function tribonacci(signature, n) {
    let res = [];
    if (n != 0) {
        if (n <= 3) {
            for (let i = 0; i < n; i++) {
                res.push(signature[i]);
            }
        } else {
            res.push(...signature);
            for (let i = 3; i < n; i++) {
                res.push(res[i - 1] + res[i - 2] + res[i - 3]);
            }
        }
    }
    return res;
}