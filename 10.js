//noprotect
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let primeSum = 0;
for (let i = 2; i < 2000000; i++) {
  if (isPrime(i)) {
    primeSum += i;
  }
}
console.log(primeSum);
