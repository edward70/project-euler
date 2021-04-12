//noprotect
let largest = 0;
let largestValue = 0;
for (let i = 1; i < 1000000; i++) {
  let a = i;
  let count = 1;
  while (true) {
    if (a % 2 === 0) {
      a/=2;
    } else {
      a = a*3+1;
    }
    count++;
    if (a === 1) {
      break;
    }
  }
  if (count > largest) {
    largest = count;
    largestValue = i;
  }
}
console.log(largestValue);
