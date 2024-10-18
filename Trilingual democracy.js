// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set
function trilingualDemocracy(group) {
    return String.fromCodePoint(group.codePointAt(0) ^ group.codePointAt(1) ^ group.codePointAt(2));
}