function Dictionary() { /*from  w  w w.  ja  va2 s .  co  m*/
  this.add = add;
  this.datastore = new Array();
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.showSorted = showSorted;
  this.count = count;
  this.clear = clear;
}
//add() function takes two arguments, a key and a
//value. The key is the index for the value element. Here is the code:
function add(key, value) {
  this.datastore[key] = value;
}
//find() function takes a key as its argument and
//returns the value associated with it.
function find(key) {
  return this.datastore[key];
}

//Removing a key-value pair from a dictionary involves
//using a built-in JavaScript function: delete.
//This function is part of the Object class and takes a reference to a key as
//its argument.
//The function deletes both the key and the associated value.
function remove(key) {
  delete this.datastore[key];
}

function showAll() {
  for (var key in Object.keys(this.datastore).sort()) {
    console.log(key + " -> " + this.datastore[key]);
  }
}

function showSorted() {
  for (var key in Object.keys(this.datastore).sort()) {
    console.log(key + " -> " + this.datastore[key]);
  }
}

function count() {
  var n = 0;
  for (var key in Object.keys(this.datastore)) {
    ++n;
  }
  return n;
}

function clear() {
  for (var key in Object.keys(this.datastore)) {
    delete this.datastore[key];
  }
}

var pbook = new Dictionary();
pbook.add("A", "123");
pbook.add("B", "345");
pbook.add("C", "456");
console.log("B's extension: " + pbook.find("B"));
pbook.remove("B");
pbook.showAll();
pbook.showSorted();
pbook.clear();
console.log("Number of entries: " + pbook.count());
