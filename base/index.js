function solutionRetry(n) {
  if (n == 0 || n == 1) return n;

  return solutionRetry(n - 1) + solutionRetry(n - 2);
}

console.log(solutionRetry(4));
console.log(solutionRetry(10));
console.log(solutionRetry(7));
console.log(solutionRetry(15));
