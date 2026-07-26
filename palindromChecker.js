// Problem: check either a word palindrom or not

// without function
let word = "civic";
let reverseWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  let letter = word[i];
  reverseWord = reverseWord + letter;
}
// console.log(reverseWord);

// if (reverseWord === word) {
//   console.log("Palindrom");
// } else {
//   console.log("Not Palindrom");
// }

// with function
function palindromChecker(str) {
  let reverseWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reverseWord = reverseWord + letter;
  }
  if (reverseWord === str) {
    return "Palindrom";
  } else {
    return "No Palindrom";
  }
}
console.log(palindromChecker("civic"));

// try with split method
function chekPanindrom(string) {
  const splitString = string.split("");
  const reverseString = splitString.reverse();
  const joinString = reverseString.join("");

  if (joinString === string) {
    return "Palindrom";
  } else {
    return "Not Palindrom";
  }
}
let check = chekPanindrom("hridoy");
console.log(check);
