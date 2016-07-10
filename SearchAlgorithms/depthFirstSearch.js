/*
The algorithm for performing a depth-first search is relatively simple—visit a vertex
that has not already been visited, mark it as having been visited, then recursively visit
the other unvisited vertices that are in the original vertex’s adjacency list.
*/

function dfs(v) {
  this.marked[v] = true;
  // if statement for print is not required
  if (this.adj[v] != undefined)
    print("Visited vertex: " + v);
  for each(var w in this.adj[v]) {
    if (!this.marked[w]) {
      this.dfs(w);
    }
  }
}
