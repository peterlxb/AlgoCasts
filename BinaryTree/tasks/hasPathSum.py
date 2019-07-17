class Solution:
    # @param root, a tree node
    # @param sum, an integer
    # @return a boolean
    def hasPathSum(self, root, sum):
        # 递归终止条件 
        if not root:
            return False

        if not root.left and not root.right and root.val == sum:
            return True
        # 从根节点开始，遍历，每次减去节点值，往左右子树遍历
        sum -= root.val
        return self.hasPathSum(root.left, sum) or self.hasPathSum(root.right, sum)
            