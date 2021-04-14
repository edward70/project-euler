console.log(BigInt("0b1"+Array(1000).fill("0").join("")).toString().split("").reduce((a,b)=>parseInt(a)+parseInt(b))); // 1 line :D
