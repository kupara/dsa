function Queue() {
  this.queue = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) {
  console.log(this);

  this.queue.push(element)
}

function dequeue() {
  return this.queue.shift();
}

function front() {
  return this.queue[0];
}

function back() {
  return this.queue[this.queue.length - 1];
}

function toString() {
  var retStr = '';
  for (var i = 0; i < this.queue.length; ++i) {
     retStr += this.queue[i] + '\t';
  }
  return retStr;
}

function empty() {
 return this.queue.length;
}

var q = new Queue;
q.enqueue('Edwin');
console.log('Initial Queue: \n', q.toString());
q.enqueue('Karis');
console.log('New Queue: \n', q.toString());
q.enqueue('Su');
console.log('New Queue: \n', q.toString());
console.log('Front of queue: ' + q.front() + '\nBack of queue: ' + q.back());
q.dequeue();
console.log('New Queue: \n', q.toString());
console.log('Front of queue: ' + q.front() + '\nBack of queue: ' + q.back());
