/* Write a function findSecondSmallest that takes an array of numbers and 
returns the second smallest distinct value. 
Input Output 
[10, 5, 8, 20, 15] 8 */

// Input: an array of numbers
// Output: the second smallest number
// Returns: a number

function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (number of numbers) {
    if (number < smallest) {
      secondSmallest = smallest;
      smallest = number;
    } else if (number < secondSmallest && number !== smallest) {
      secondSmallest = number;
    }
  }
  return secondSmallest;
}

console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8
