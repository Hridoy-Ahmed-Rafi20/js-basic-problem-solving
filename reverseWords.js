/* 13-10B: Reverse the Word Order 
Problem Statement: Write a function reverseWords that takes a sentence 
and returns it with the order of the words reversed (the letters inside each 
word stay the same). 
Input Output 
"hello world" "world hello" */

// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string

function reverseWords(sentence) {
  let splitSentence = sentence.split(" ");
  let reverseWord = splitSentence.reverse();
  let intoStr = reverseWord.join(" ");

  return intoStr;
}

console.log(reverseWords("hello world")); // Expected: "world hello"
