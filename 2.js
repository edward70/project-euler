let fib = [1,2];
let evenSum = 0;
while (fib[1] < 4000000) {
  evenSum += fib[1] % 2 === 0 ? fib[1] : 0; // ternary :)
  fib = [fib[1], fib[0] + fib[1]];
}
console.log(evenSum)
