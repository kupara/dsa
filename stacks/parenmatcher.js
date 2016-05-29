var Stack = require('./stack');

function parenMatcher(exp) {
  var parens = new Stack();
  var arr = exp.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == '(') {
      parens.push('(');
    }
    if (arr[i] == ')') {
      parens.pop();
    }
  }
  return (parens.length() == 0);
}

console.log(parenMatcher('2.3 + (23 / 12 + (3.14159 * .24))'));
console.log(parenMatcher('342.23 + ((23-11) / 12 + (3.14159 * (0.04*6)))'));
