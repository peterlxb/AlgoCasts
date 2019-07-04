# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        : 广度优先算法示例
        """
        if not root: return []
        
        result = []
        queue = collections.deque()
        queue.append(root)
        
        # visited  = set(root)
        
        while queue:
            level_size = len(queue)
            current_level = []
            
            for _ in range(level_size):
                node = queue.popleft()
                current_level.append(node.val)
                if node.left: queue.append(node.left)
                if node.right: queue.append(node.right)
            
            result.append(current_level)
            
        return result
    
    """
    使用DFS 深度优先搜索
    """
    def levelOrder1(self, root):
        if not root: return []
        
        self.result = []
        self._dfs(root, 0)
        return self.result
        
        
    def _dfs(self, node, level):
        if not node: return
        
        if len(self.result) < level + 1:
            self.result.append([])
            
        self.result[level].append(node.val)
        self._dfs(node.left, level + 1)
        self._dfs(node.right, level + 1)
        
                    
                
                
        