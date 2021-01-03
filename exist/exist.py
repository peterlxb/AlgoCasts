"""
二维网格中查找单词

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

"""

class Solution(object):
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """    
        if not board:
            return False
        for i in range(len(board)):
            for j in range(len(board[0])):
                if self.dfs(board, i, j, word):
                    return True
        return False

    def dfs(self, board, i, j, word):
        if len(word) == 0 : # 最后的元素都检查完
            return True
        
        if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]) or word[0] != board[i][j]:
            return False
        
        tmp = board[i][j] # 找到的元素，检查剩余元素
        board[i][j] = "#" # 避免重复查找
        print("tmp: ", tmp)

        res = self.dfs(board, i+1, j, word[1:]) or \
        self.dfs(board, i-1, j, word[1:]) or \
        self.dfs(board, i, j+1, word[1:]) or \
        self.dfs(board, i, j-1, word[1:])

        print("res: ", res)
        board[i][j] = tmp
        return res

def main():
    board =[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
  ]
    word = "ABCCED"   

    ret = Solution().exist(board, word)
    print(ret)


main()