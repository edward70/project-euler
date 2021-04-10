//noprotect
function findTriplet() {
  for (let i = 1; i <= 1000; i++) {
    for (let j = i + 1; j <= 1000 - i; j++) {
      for (let k = j + 1; k <= 1000 - i - j; k++) {
        if (i ** 2 + j ** 2 === k ** 2 && i + j + k === 1000) {
            return i*j*k;
        }
      }
    }
  }
}
console.log(findTriplet())
