/*  
const student = {
  name: "Utsho",
  age: 25,
  university: "DIU",
  department: "CSE",
};

task: 
print all keys 
print all values
print all keys and values pair
count total properties
check has eny property named "Email"
*/

const student = {
  name: "Utsho",
  age: 25,
  university: "DIU",
  department: "CSE",
};

function objOperation(obj) {
  // getting keys
  for (let key in obj) {
    console.log(key);
  }
  // getting values
  for (let key in obj) {
    let value = obj[key];
    console.log(value);
  }
  // getting keys values pair
  for (let key in obj) {
    let value = obj[key];
    console.log(key, ":", value);
  }
  // count total properties // way-1
  //   let count = 0;
  //   for (let key in obj) {
  //     count++;
  //   }
  //   console.log("Total Properties:", count);

  // another way,that is shortcut and easy
  // not it: ["name", "age", "university", "department"], since not it turned into array so i can it length and i will get total properties
  let getKyes = Object.keys(obj);
  let countKyes = getKyes.length;
  console.log("Total Properties: ", countKyes);

  //check has eny property named "Email"
  let hasEmail = Object.hasOwn(obj, "email");
  console.log("Has Email", hasEmail);
}
objOperation(student);
