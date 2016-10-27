// A semiprime is the product of two prime numbers. Given a semiprime,
// write a function that will return an array of both prime numbers
// that were used to create it. Only small semiprimes will be passed
// to your function so don’t worry about timing out.


function semiPrime(number) {
  for (let i = 2; i < number; i++) {
    if ((number % i === 0) && isPrime(i)) {
      if (isPrime(number / i)) {
        return [i, (number / i)]
      }
    }
  }
  return 'Number is not semiprime';

  // helper function, return true if input is prime
  function isPrime(num) {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }
}

semiPrime(55);
// returns [5, 11]
