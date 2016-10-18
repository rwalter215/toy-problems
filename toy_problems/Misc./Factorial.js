// Return the factorial of a number using recursion
function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

factorial(4); // returns 24
