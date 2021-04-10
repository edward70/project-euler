//noprotect
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let count = 0;
let prime = 2;
while (true) {
  if (isPrime(prime)) {
    count++;
  }
  if (count === 10001) {
    console.log(prime);
    break;
  }
  prime++;
}
