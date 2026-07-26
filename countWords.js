// count word of an secntence

// without function
let word = "hridoy ahmed rafi";
let str = "";

let splitWord = word.split(" ");
let countWord = splitWord.length;
console.log(countWord);

// with  function
function wordCounter(secntence) {
  const splitSentence = secntence.split(" ");
  const countWord = splitSentence.length;

  return countWord;
}

const checkWord = "Hello world";
const result = wordCounter(checkWord);
console.log(`There is : ${result} word`);
