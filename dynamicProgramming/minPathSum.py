"""
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
"""
class Solution(object):
    def minPathSum(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        m = len(grid)
        n = len(grid[0])
        
        """
        初始化第一行数据 
        """
        for i in range(1, n):
            grid[0][i] += grid[0][i - 1]

        """
        初始化第一列数据
        """
        for j in range(1, m):
            grid[j][0] += grid[j - 1][0]
            
        for i in range(1, m):
            for j in range(1, n):
                grid[i][j] += min(grid[i-1][j], grid[i][j-1])
        return grid[-1][-1]