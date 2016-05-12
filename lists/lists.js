function List() {
  this.listSize = 0;
  this.pos = 0;
  this.length = length;
  this.clear = clear;
  this.insertAt = insertAt;
  this.toString = toString;
  this.getElement = getElement;
  this.find = find;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.currPos = currPos;
  this.moveTo =moveTo;
  this.dataStore = [];
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore;
}

function insertAt(pos, element) {
  if(pos <= this.listSize) {
    this.dataStore.splice(pos, 0, element);
    ++this.listSize;
    return true;
  }
  throw new RangeError('Out of Bounds');
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if(this.pos > 0) {
    --this.pos;
  }
  else {
    throw new RangeError('Position out of range!');
  }
}

function next() {
  if(this.pos < this.listSize - 1) {
    ++this.pos;
  }
  else {
    throw new RangeError('Position out of range!');
  }
}

function currPos() {
  return this.pos;
}

function getElement() {
  return this.dataStore[this.pos]
}

function moveTo(pos) {
  if (pos < this.listSize) {
    this.pos = pos;
  }
  else {
    throw new RangeError('Position out of range!');
  }
}

var testList = new List();
testList.append(3);
console.log(testList);
testList.append(35);
console.log(testList);
testList.remove(3)
console.log(testList.toString());
console.log(testList.length());
testList.insertAt(1, 22);
console.log('After insertion into list: ', testList.toString());
testList.moveTo(1);
testList.prev();
console.log('element at this pos: ', testList.getElement());
testList.clear();
console.log('Cleared list: ', testList.toString());
