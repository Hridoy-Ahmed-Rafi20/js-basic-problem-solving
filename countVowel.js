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

// with function
function countVowels(sentence) {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i <= sentence.length - 1; i++) {
    let letter = sentence[i];
    if (vowel.includes(letter)) {
      count++;
    }
  }
  return count;
}

let ph = "Programming hero";
let getPhVowels = countVowels(ph);
console.log(`count vowel of ${ph} is : ${getPhVowels} `);

let bd = "Bangladesh";
let getBdVowels = countVowels(bd);
console.log(`count vowel of ${bd} is : ${getBdVowels} `);
