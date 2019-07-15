class Solution(object):
    def solveNQueens_one(self, n):
        """
        :type n: int
        :rtype: List[List[str]]
        """
        if n < 1: return []
        self.result = []
        self.cols = set(); self.pie = set(); self.na = set()
        self.DFS(n, 0, [])
        return self._generate_result(n)

    def DFS(self, n, row, cur_start):
      # recursion terminator
      if row >= n:
        self.result.append(cur_start)
        return

      for col in range(n):
        if col in self.cols or row + col in self.pie or row - col in self.na:
          # go die
          continue
        
        # updates the flag
        self.cols.add(col)
        self.pie.add(row + col)
        self.na.add(row - col)

        self.DFS(n, row + 1, cur_start + [col])

        self.cols.remove(col)
        self.pir.remove(row + col)
        self.na.remove(row - col)

    def _generate_result(self, n):
      board = []
      for res in self.result:
        for i in res:
          board.append("."*i + "Q"+ "."*(n-i-1))
      
      return [board[i: i + n] for i in range(0, len(board), n)]
    # 第二种解法
    def solveNQueens(self, n):
      def DFS(queens, xy_diff, xy_sum):
        p = len(queens)
        if p==n:
          result.append(queens)
          return None
        for q in range(n):
          if q not in queens and p - q not i xy_diff and p + q not in xy_sum:
            DFS(queens+[q], xy_diff+[p-q], xy_sum(p+q))
      result = []
      DFS([], [], [])
      return [ ["*"*i + "Q" + "*"*(n-1-i) for i in sol] for sol in result ]


     
      