/* Task 13-8A: List an Object's Keys 
Problem Statement: 
Write a function listKeys that takes an object and returns an array containing 
its property names (keys). 
Input Output 
{ name: "Sam", age: 25, city: "Dhaka" } ["name", "age", "city"] */

// Input: an object
// Output: array of the object's keys
// Returns: an array

function listKeys(obj) {
  let keys = [];

  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}

console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));
// Expected: ["name", "age", "city"]
