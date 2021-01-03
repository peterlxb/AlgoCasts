/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    // 暴力破解法，直接用递归, 树太高，递归调用的函数就越多，与树 height 成正比
    public TreeNode invertTree(TreeNode root) {
        if (root == null) {
            return null;
        }
        
        TreeNode right = invertTree(root.right);
        TreeNode left = invertTree(root.left);
        root.left = right;
        root.right = left;
        return root;
    }

    // 使用一个栈
    public TreeNode invertTree(TreeNode root) {
        if (root == null) {
            return null;
        }

        final Deque<TreeNode> stack = new LinkedList<>();
        stack.push(root);

        while (!stack.isEmpty()) {
          final TreeNode node =  stack.pop();
          final TreeNode left = node.left;

          node.left = node.right;
          node.right = left;

          if (node.left != null) {
            stack.push(node.left);
          }

          if (node.right != null) {
            stack.push(node.right);
          }
        }
        return root;
    }
}