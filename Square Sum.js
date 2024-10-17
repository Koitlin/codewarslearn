function squareSum(numbers){
    return numbers.reduce((sum, item) => sum += item * item, 0);
  }