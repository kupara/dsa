const Stack = require('./stack');

function isPalindrome(word) {
  let s = new Stack();
  for (let i = 0; i < word.length; ++i) {
    s.push(word[i]);
  }
  let rword = '';
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (word == rword) {
    return true;
  } else {
    return false;
  }
}
const word = "hello";
if (isPalindrome(word)) {
  console.log(`${word} is a palindrome.)`;
} else {
  console.log(`${word} + is not a palindrome.`);
}
const new_word = "racecar"
if (isPalindrome(new_word)) {
  console.log(`${new_word} is a palindrome.)`);
} else {
  console.log(`${new_word} is a palindrome.)`);
}
