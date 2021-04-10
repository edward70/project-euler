//noprotect

function isDivisible(num) {
  for (let i = 1; i <= 20; i++) {
    if (num % i !== 0) {
      return false;
    }
  }
  return true;
}

// must be a greater number than for the 1 to 10 case
// for loop trick :)
for ( let i = 2520 ;; i++) {
  if (isDivisible(i)) {
    console.log(i);
    break;
  }
}
