function dnaStrand(dna){
    let pair = "";
    for (let i = 0; i < dna.length; i++) {
      switch (dna[i]) {
          case 'A': pair += 'T'; break;
          case 'T': pair += 'A'; break;
          case 'C': pair += 'G'; break;
          case 'G': pair += 'C'; break;
      }
    }
    return pair;
}