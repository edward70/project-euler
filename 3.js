// tried to do it the smart way but the dumb way made more sense
let num = 600851475143;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        num /= i;
    }
}
console.log(num);
