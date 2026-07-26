// Problem: factorial of a number

// without function
let number = 4;
let facto = 1; // in multiple initialization must start with 1
for (let i = 1; i <= number; i++) {
  facto = facto * i;
}
console.log(`Factorial result from without function: ${facto}`);

// with function
function getFactorial(number) {
  let facto = 1; //in multiple initialization must start with 1
  for (let i = 1; i <= number; i++) {
    facto = facto * i;
  }
  return facto;
}
const getFactoOfFour = getFactorial(4);
const getFactoOfFive = getFactorial(5);
console.log(`Factorial result from with function: ${getFactoOfFour}`);
console.log(`Factorial result from with function: ${getFactoOfFive}`);
