// Problem:sum of a range of a number (1 to N)

// without function
let number = 7;
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(`sum from without function: ${sum}`);

// with function
function sumOfRange(number) {
  sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}
const result = sumOfRange(7);
console.log(`sum with function ${result}`);
