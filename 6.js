let sumsquared = (50 * (1 + 100)) ** 2;
let squaredsum = 0;
for (let i = 1; i <= 100; i++) {
  squaredsum += i ** 2;
}
console.log(sumsquared - squaredsum)
