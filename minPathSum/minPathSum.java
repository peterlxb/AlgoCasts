class Solution {
    public int minPathSum(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int[][] states = new int[m][n];
        
        int sum = 0;
        for (int j = 0; j < n; ++j) { // 初始化 states 的第一行数据
            sum += grid[0][j];
            states[0][j] = sum;
        }
        
        sum = 0;
        for (int i = 0; i < m; ++i) { // 初始化 states 的第一列数据
            sum += grid[i][0];
            states[i][0] = sum;
        }
        
        for (int i = 1; i < m; ++i) {
            for (int j = 1; j < n; ++j) {
                states[i][j] = grid[i][j] + Math.min(states[i][j-1], states[i-1][j]);
            }
        }
        
        return states[m-1][n-1];
    }
}