// simple method
let num = 600851475143;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        num /= i;
    }
}
console.log(num);

// better method
function largestPrimeFactor(num) {
  for (let i = 2; i < Math.sqrt(num); i++) { // in a composite number a prime factor can't be larger than the sqrt
    if (num % i === 0) { // check if it's a factor
      let lpf = largestPrimeFactor(i); // largest prime factor of factor
      let colpf = largestPrimeFactor(num/i); // largest prime factor of corresponding factor
      return lpf > colpf ? lpf : colpf; // return the bigger one
    }
  }
  return num; // no matches so it's a prime
}
console.log(largestPrimeFactor(600851475143));
