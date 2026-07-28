// Problem: Count vowel of a sentence

// without function
let word = "hridoy";
let vowel = ["a", "e", "i", "o", "u"];
let count = 0;
for (let i = 0; i <= word.length - 1; i++) {
  const letter = word[i];
  if (vowel.includes(letter)) {
    count++;
  }
}
console.log("count of vowels:", count);

// with function //
function countVowel(sentence) {
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  // for (let i = 0; i <= sentence.length - 1; i++) {
  //   if (vowel.includes(sentence[i])) {
  //     count++;
  //   }
  // }

  for (let i of sentence) {
    if (vowel.includes(i)) {
      count++;
    }
  }

  return count;
}
console.log(countVowel("javascript"));

