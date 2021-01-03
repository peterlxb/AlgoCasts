/**
 *  查找二叉搜索树中的第K小元素
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

/**
 * 使用递归Recursion 遍历整个二叉搜索树 采用中序遍历(inorder)，暴力破解法
 */
class Solution1 {
    public ArrayList<Integer> inorder(TreeNode root, ArrayList<Integer> arr) {
      if (root == null) return arr;

      inorder(root.left, arr);
      arr.add(root.val);
      inorder(root.right, arr);
      return arr;
    }

    public int kthSmallest(TreeNode root, int k) {
      ArrayList<Integer> nums = inorder(root, new ArrayList<Integer>());

      return nums.get(k - 1);  
    }
}

/**
 * 使用迭代的方式，递归的改进版，利用stack栈, 要查找的元素也可能在右子树
 */
 class Solution2 {
    public int kthSmallest(TreeNode root, int k) {
       // 基于链表的栈
        LinkedList<TreeNode> stack = new LinkedList<TreeNode>();

        while (true) {
          while (root != null) {
            stack.add(root);
            root = root.left;
          }
          root = stack.removeLast();
          if (--k == 0) return root.val;
          root = root.right;
        }
    }
}