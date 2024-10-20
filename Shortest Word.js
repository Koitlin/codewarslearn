function findShort(s) {
    return s.split(' ').reduce((m, i) => (i.length < m ? i.length : m), 10);
}