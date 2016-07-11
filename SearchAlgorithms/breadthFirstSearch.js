/*
The algorithm for breadth-first search uses a queue abstraction instead of an array
abstraction for storing visited vertices. The algorithm works as follows:
1. Find an unvisited vertex that is adjacent to the current vertex, add it to the list of
visited vertices, and add it to the queue.
2. Take the next vertex, v, from the graph and add it to the list of visited vertices.
3. Add all unmarked vertices that are are adjacent to v and add them to the queue.
*/

function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s); // add to back of queue
  while (queue.length > 0) {
    var v = queue.shift(); // remove from front of queue
    if (v == undefined) {
      print("Visited vertex: " + v);
    }
    for each(var w in this.adj[v]) {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}
