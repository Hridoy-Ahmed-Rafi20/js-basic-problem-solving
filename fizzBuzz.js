// Problem: FizzBuzz (1 to N)
// condition=> if number divisible by 3 print=fizz, if number divisible by 5 print=buzz,
// if number divisible by both 3 and 5 print=fizzbuzz, otherwise print the number itselt

// without funcion
let numebr = 15;

for (let i = 1; i <= numebr; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// with function
function fizzBuzz(numebr) {
  let result = [];
  for (let i = 1; i <= numebr; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}
console.log(fizzBuzz(20));
