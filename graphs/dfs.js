(function(exports) {
  const dfs = (function() {
    function hasPath(graph, current, goal) {
      let stack = [];
      let visited = [];
      let node;

      stack.push(current);
      visited[current] = true;

      while (stack.length) {
        node = stack.pop();

        if (node === goal) {
          return true;
        }

        for (let i = 0; i < graph[node].length; i += 1) {
          if (graph[node][i] && !visited[i]) {
            stack.push(i);
            visited[i] = true;
          }
        }
      }
      return false;
    }
    /**
     * Depth-First graph searching algorithm 深度优先算法
     * Returns whether  there's a path between two nodes in a graph.
     *
     * @param {Array} graph Adjacency matrix, which represents the graph.
     * @param {Number} start Start Node.
     *
     * @example
     * var dfs = require('../src/graphs/searching/dfs').dfs;
     * var graph = [[1, 1, 0, 0, 1, 0],
     *              [1, 0, 1, 0, 1, 0],
     *              [0, 1, 0, 1, 0, 0],
     *              [0, 0, 1, 0, 1, 1],
     *              [1, 1, 0, 1, 0, 0],
     *              [0, 0, 0, 1, 0, 0]];
     * var pathExists = dfs(graph, 1, 5); // true
     */
    return function(graph, start, goal) {
      return hasPath(graph, start, goal);
    };
  })();
  exports.dfs = dfs;
})(typeof exports === "undefined" ? window : exports);
