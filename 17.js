// not elegant but it works
let nums = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

let string = "";
for (let i = 1; i <= 1000; i++) {
  let str = i.toString();
  if (i === 1000) {
    string += "onethousand";
    break;
  }
  if (str.length >= 3) {
    string += nums[parseInt(str[str.length-3])-1];
    string += "hundred";
    if (str[str.length-2] !== "0" || str[str.length-1] !== "0") {
      string += "and";
    }
  }
  if (str[str.length-2] === "1") {
    if (str[str.length-1] === "0") {
      string += tens[0];
    } else {
      string += teens[parseInt(str[str.length-1])-1];
    }
  } else {
    if (str[str.length-2] && str[str.length-2] !== "0") {
      string += tens[parseInt(str[str.length-2])-1]
    }
    if (str[str.length-1] !== "0") {
      string += nums[parseInt(str[str.length-1])-1];
    }
  }
}
console.log(string.length);
