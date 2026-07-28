/* 13-10A: Perfect Square Checker 
Problem Statement: Write a function isPerfectSquare that takes a number 
and returns true if it is a perfect square, otherwise false. 
Input Output 
16  true 
20  false */

// Input: a number
// Output: true or false
// Returns: a boolean

function isPerfectSquare(num) {
  for (let i = 1; i <= num; i++) {
    let perfectSquare = i * i;
    if (num === perfectSquare) {
      return true;
    }
  }
  return false;
}

console.log(isPerfectSquare(16)); // Expected: true
// console.log(isPerfectSquare(121)); // Expected: true
console.log(isPerfectSquare(20)); // Expected: false
