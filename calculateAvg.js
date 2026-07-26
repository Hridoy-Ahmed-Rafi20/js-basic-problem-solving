// Problem: calculate average

// without function
let numbers = [1, 2, 5, 10];
let sum = 0;
for (let number of numbers) {
  sum += number;
}
let avg = sum / numbers.length;
console.log("Avg:", avg);

// with function
function calculateAvg(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  let average = sum / numbers.length;
  return average;
}
console.log(`Average: ${calculateAvg(numbers)}`);
