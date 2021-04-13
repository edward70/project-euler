function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return factorial(num-1) * num;
}

function combinations(gridSize) {
  return factorial(gridSize*2) / (factorial(gridSize) ** 2);
}

console.log(combinations(20));
