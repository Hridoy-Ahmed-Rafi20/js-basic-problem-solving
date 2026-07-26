// Problem: Find largest and smallest value

// without function
// finding largest value
let numbers = [10, 50, 100, 400, 700, 900, 230, 1300];
let largest = numbers[0];

for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("largest", largest);

// finding lowest value
let lowest = numbers[0];

for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] < lowest) {
    lowest = numbers[i];
  }
}
console.log("lowest ", lowest);

// with function
// findingn largest value
function findLargest(numbersList) {
  let largest = numbersList[0];
  for (let i = 0; i <= numbersList.length - 1; i++) {
    if (numbersList[i] > largest) {
      largest = numbersList[i];
    }
  }
  return largest;
}
console.log(`Largest value: ${findLargest(numbers)}`);

// finding lowest value
function findLowest(numbersList) {
  let lowest = numbers[0];
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }
  return lowest;
}
console.log(`Lowest value: ${findLowest(numbers)}`);
