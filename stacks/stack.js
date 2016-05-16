module.exports = Stack = function() {
  this.top = 0;
  this.length = length;
  this.pop = pop;
  this.push = push;
  this.clear = clear;
  this.empty = isEmpty;
  this.peek = peek;
  this.toString = toString;
  this.stack = [];
}

function push(element) {
  this.stack[this.top++] = element;
}

function pop() {
  if (!this.empty()) {
    return this.stack.splice(--this.top, 1);
  } else {
    {
      throw Error('Stack is empty');
    }
  }
}

function clear() {
  delete this.stack;
  this.stack = [];
  this.top = 0;
}

function peek() {
  return this.stack[this.top - 1]
}

function length() {
  return this.top;
}

function toString() {
  return this.stack;
}

function isEmpty() {
  return (this.top === 0);
}

//module.exports = Stack;

// var testStack = new Stack();
// console.log('Is stack empty: ', testStack.empty());
// testStack.push('Edwin');
// testStack.push(25);
// testStack.push('Jojo');
// testStack.push(23);
//
// console.log('Stack after pushing 25: ', testStack.toString());
// testStack.pop();
// console.log('Stack after popping 23: ', testStack.toString());
// testStack.push('Jojo');
// console.log('Is stack empty: ', testStack.empty());
// console.log('What is at the top?: ', testStack.peek());
