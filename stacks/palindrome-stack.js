var Stack = require('./stack');

function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
  }
  var rword = '';
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (word == rword) {
    return true;
  } else {
    return false;
  }
}
var word = "hello";
if (isPalindrome(word)) {
  console.log(`${word} is a palindrome.)`;
} else {
  console.log(`${word} + is not a palindrome.`);
}
var new_word = "racecar"
if (isPalindrome(new_word)) {
  console.log(`${new_word} is a palindrome.)`);
} else {
  console.log(`${new_word} is a palindrome.)`);
}
