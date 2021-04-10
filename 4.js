// unoptimized
let palindrome = 0;
for (let i = 999; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    let num = i * j;
    let str = num.toString();
    if (str === str.split("").reverse().join("") && num > palindrome) {
      palindrome = num;
    }
  }
}
console.log(palindrome);
