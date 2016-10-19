// Given an array of negative/positive integers,
// return true if there exists three numbers whose sum is zero.

function zeroSum3(numbers) {
  let zero = false;
  for (let i = 0; i < numbers.length; i++) {
    for (let k = (i + 1); k < numbers.length; k++) {
      for (let j = (k + 1); j < numbers.length; j++) {
        if (numbers[i] + numbers[k] + numbers[j] === 0) zero = true;
      }
    }
  }
  return zero;
}

zeroSum3([6, 9, 7, 5, 2, 4, 6, 8, 5, 5, -7, 6, 5, -7, -9, -6, -4, 7, 4, -5, -5, 4, 2, 1]);
// returns false
