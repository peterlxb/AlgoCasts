(function(exports) {
  const bfs = (function() {
    function buildPath(parents, targetNode) {
      let result = [targetNode];

      while (parents[targetNode] != null) {
        targetNode = parents[targetNode];
        result.push(targetNode);
      }

      return result.reverse();
    }

    /**
     * Breath_First graph searching algorithm 广度优先搜索算法(基于图)
     * Return the shortest path between startNode and targetNode
     *
     * @public
     * @param {Array} graph Adjacency matric(邻接矩阵), which represents the graph.
     * @param {Number} startNode Start node.
     * @param {Number} targetNode Target, which should be reached.
     * @returns {Array} shortest path from startNode to targetNode.
     *
     * @example
     * const bfs = require("./path-to-algorithm/src/bfs").bfs;
     * const graph = [[1, 1, 0, 0, 1, 0],
     *                [1, 0, 1, 0, 1, 0],
     *                [0, 1, 0, 1, 0, 0],
     *                [0, 0, 1, 0, 1, 1],
     *                [1, 1, 0, 1, 0, 0],
     *                [0, 0, 0, 1, 0, 0]];
     * const shortestPath = bfs(graph, 1, 5); // [1, 2, 3, 5]
     */
    return function(graph, startNode, targetNode) {
      let parents = []; // 用来存储搜索路径，这个路径是反向存储的。
      let queue = []; // 用来存储已经被访问，但相连的顶点还没被访问的顶点。
      let visited = []; // 用来记录已经访问过的顶点，用来避免顶点被重复访问。如果顶点 q 被访问，那相应的 visited[q] 会被设置为 true。
      let current;

      queue.push(startNode);
      parents[startNode] = null;
      visited[startNode] = true;

      while (queue.length) {
        current = queue.shift();

        if (current === targetNode) {
          return buildPath(parents, targetNode);
        }

        for (let i = 0; i < graph.length; i += 1) {
          if (i !== current && graph[current][i] && !visited[i]) {
            parents[i] = current;
            visited[i] = true;
            queue.push(i);
          }
        }
      }

      return null;
    };
  })();
  exports.bfs = bfs;
})(typeof window === "undefined" ? module.exports : window);
