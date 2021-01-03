# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution(object):
    """
    从root节点开始遍历整个tree,直到找到p q , 将父节点保存在字典中
    找到p q之后，找到p的所有的祖先元素，利用集合set存储
    然后遍历q结点，如果set中有q的祖先元素，返回这个元素
    """
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """
        # 用来遍历的栈
        stack = [root]
        # 存储父节点的字典
        parent = {root: None}
        
        while p not in parent or q not in parent:
            node = stack.pop()
            if node.left:
                parent[node.left] = node
                stack.append(node.left)
            if node.right:
                parent[node.right] = node
                stack.append(node.right)
        
        # 设置节点 p 的祖先集合
        ans = set()
        
        # 使用parent 指针处理p 的祖先集合
        while p:
            ans.add(p)
            p = parent[p]
            
        # 在 p 的集合ans中出现的第一个q的祖先节点就是最小公共子节点
        while q not in ans:
            q = parent[q]
        return q

# 二叉搜索树版本
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """
        # value of p
        p_val = p.val
        
        # value of q
        q_val = q.val
        
        # start from the root node of the tree
        node = root
        
        # 遍历树
        while node:
            parent_val = node.val
            
            if p_val > parent_val and q_val > parent_val:
                node = node.right
            elif p_val < parent_val and q_val < parent_val:
                node = node.left
            else:
                return node