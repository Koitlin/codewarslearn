function moveTen(s) {
    return s.split('').map(c => "klmnopqrstuvwxyzabcdefghij"["abcdefghijklmnopqrstuvwxyz".indexOf(c)]).join('');
}