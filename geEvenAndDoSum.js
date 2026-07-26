// get all even numbers and do their sum
// without function
let numbers = [10, 21, 22, 40, 49, 80, 60, 47];
let evenNumbers = [];
for (let number of numbers) {
  if (number % 2 === 0) {
    // console.log("Even", number);
    evenNumbers.push(number);
  }
}

let sum = 0;
for (let i of evenNumbers) {
  sum += i;
}
console.log("Even numbers:", evenNumbers);
console.log("sum of even numbers:", sum);

// with function
function getEvenNumbers(numbers) {
  let evenNumbers = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}
let evenNumber = getEvenNumbers(numbers);
// console.log(`All even numbers:[ ${evenNumber} ]`);
console.log("ALl even numbers", evenNumber);

function getEvenNumbersSum(evenNumbers) {
  sum = 0;
  for (let number of evenNumbers) {
    sum += number;
  }
  return sum;
}
let getSum = getEvenNumbersSum(evenNumber);
// console.log(`Sum of all even numbers ${getSum}:`);
console.log("Sum of all even numbers", getSum);
