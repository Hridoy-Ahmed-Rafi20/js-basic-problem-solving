// Problem: EvenOdd Checker & Sum of a Range

// without function
let number = 20;

if (number % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// with funtion
function oddEvenChecker(number) {
  if (number % 2 === 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
}
console.log(oddEvenChecker(23));
console.log(oddEvenChecker(50));