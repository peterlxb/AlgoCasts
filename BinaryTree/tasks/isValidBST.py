#Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution(object):
    """
    用inorder中序遍历 左结点 根结点 右结点
    根据二叉搜索树定义，每个元素都要比下一个元素小
    每个元素要至少遍历一遍，时间复杂度O(N)
    需要额外的stack 空间复杂度O(N)
    """
    def isValidBST(self, root):
        stack, inorder = [], float('-inf')
        while stack or root:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            # If next element in inorder traversal
            # is smaller than the previous one
            # that's not BST.
            if root.val <= inorder:
                return False
            inorder = root.val
            root = root.right
    
        return True