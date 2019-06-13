const dfs = require("./dfs").dfs;

const graph = [
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0]
];

var pathExists = dfs(graph, 1, 5);

console.log(pathExists);
