const bfs = require("./bfs").bfs;

const graph = [
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0]
];

const shortestPath = bfs(graph, 1, 5); // [1, 2, 3, 5]
console.log(shortestPath);
