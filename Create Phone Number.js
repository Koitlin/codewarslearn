function createPhoneNumber(numbers){
    let i = 0;
    return "(###) ###-####".replace(/#/g, () => numbers[i++]);
  }