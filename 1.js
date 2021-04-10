/* Multiples of 3 and 5 */

let max5 = 995; // largest multiple of 5 below 1000
let max3 = 999; // same for 3
let max15 = 990; // etc.

let n5 = max5 / 5; // number of multiples of 5 below 1000
let n3 = max3 / 3;
let n15 = max15 / 15;

let sum5 = n5 / 2 * (5 + max5); // arithmetic series sum
let sum3 = n3 / 2 * (3 + max3);
let sum15 = n15 / 2 * (15 + max15);


// add arithmetic sums of 3 and 5 multiples, multiples of 15 are duplicated so subtract them once
console.log(sum5 + sum3 - sum15);
