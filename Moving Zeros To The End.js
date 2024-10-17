function moveZeros(arr) {
    return arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));
}