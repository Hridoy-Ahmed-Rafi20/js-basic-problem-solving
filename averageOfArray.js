/* Task 13-7A: Average of All Numbers 
Problem Statement: 
Write a function averageOfArray that takes an array of numbers and returns 
their average. 
Input Output 
[2, 4, 6] 4 
 */

// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number

function averageOfArray(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  let avg = total / numbers.length;
  return avg;
}
console.log(averageOfArray([2, 4, 6])); // Expected: 4
