from collections import defaultdict

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

END_OF_WORD = "#"

class Solution:
    def findWords(self, board, words):
        """
        :type board: List[List[str]]
        :type words: List[str]
        :rtype: List[str]
        """

        if not board or not board[0]:
            return []
        if not words:
            return []
        
        " 用set保留结果 "
        self.result = set()

        root = defaultdict()
        """
        : build Trie 树
        """
        for word in words:
            node = root
            for char in word:
                node = node.setdefault(char, defaultdict())
            node[END_OF_WORD] = END_OF_WORD

        self.m, self.n = len(board), len(board[0])

        for i in xrange(self.m):
            for j in xrange(self.n):
                if board[i][j] in root:
                    self._dfs(board, i, j, "", root)
        
        return list(self.result)


    def _dfs(self, board, i, j, cur_word, cur_dict):
        cur_word += board[i][j]
        """
        : 每次根据board 当前的字符向下取一层，这样每次找trie的时候不需要从根节点开始找
        """
        cur_dict = cur_dict[board[i][j]]

        if END_OF_WORD in cur_dict:
            self.result.add(cur_word)
            
        tmp, board[i][j] = board[i][j], "@"
        for k in xrange(4):
            x, y = i + dx[k], j + dy[k]
            if 0 <= x < self.m and 0 <= y < self.n \
                and board[x][y] != "@" and board[x][y] in cur_dict:
                self._dfs(board, x, y, cur_word, cur_dict)
        board[i][j] = tmp
