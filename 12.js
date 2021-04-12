//noprotect
function getFactorCount(num) {
  let count = 0;
  let square = Math.sqrt(num);
  for (let j = 1;j<square;j++) {
    if (num % j === 0) {
      count+=2;
    }
  }
  if (square % 1 === 0) {
    count++;
  }
  return count;
}

for (let i = 1;;i++) {
  let sum = i / 2 * (1+i);
  let count = getFactorCount(sum);
  if (count > 500) {
    console.log(sum);
    break;
  }
} 
