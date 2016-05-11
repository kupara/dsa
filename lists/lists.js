function List() {
  this.listSize = 0;
  this.pos = 0;
  // this.length = listSize;
  // this.clear = clear;
  // this.insert = insert;
  // this.toString = toString;
  // this.getElement = getElement;
  this.find = find;
  this.append = append;
  this.remove = remove;
  // this.front = front;
  // this.end = end;
  // this.prev = prev;
  // this.next = next;
  // this.currPos = currPos;
  // this.moveTo =moveTo;
  this.dataStore = [];
}

function append(element) {
  this.dataStore[++this.listSize] = element;
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

var testList = new List();
testList.append(3);
console.log(testList);
testList.append(35);
console.log(testList);
testList.remove()
console.log(testList);
