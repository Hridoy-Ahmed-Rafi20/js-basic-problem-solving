// Problem: Reverse reverseWord1

// without function
//way -1
let str = "programming";
let reverseWord1 = "";
for (let i = str.length - 1; i >= 0; i--) {
  let letter = str[i];
  reverseWord1 += letter;
}
console.log(reverseWord1);

// way-2
let reverseWord2 = "";
for (let i = 0; i <= str.length - 1; i++) {
  const letter = str[i];
  reverseWord2 = letter + reverseWord2;
}
console.log(reverseWord2);

// way-3
const splitStr = str.split("");
const reverseStr = splitStr.reverse();
const joinStr = reverseStr.join("");
console.log(joinStr);

// with function
// I'm using str.split().reverse().join(); method to solve this reverse word problem,
// because this way is standard and most common way in js
function reverseWord(word) {
  let splitWord = word.split("");
  let reverseWord = splitWord.reverse();
  let joinWord = reverseWord.join("");

  return joinWord;
}
console.log(reverseWord("Bangladesh"));
