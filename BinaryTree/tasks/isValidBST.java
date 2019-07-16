// 定义一个 binary tree node.
public class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;

  TreeNode(int x) {
    val = x; 
  }
}

/**
 * 判断一个二叉树是不是一个二叉搜索数
 * 二叉搜索树满足三个条件:
 * 一个结点的左子树一定比这个结点小
 * 一个结点的右子树一定比这个结点大。
 * 左右子节点必须分别也是二叉搜索树
 */

 /**
    5
   / \
  1   4
     / \
    3   6

  输入: [5,1,4,null,null,3,6] 
  输出: false
  Explanation: 根结点的值是5，右子树有4
  */
 class Solution {

   public boolean helper(TreeNode root, Integer min, Integer max) {
     if (root == null) return true;
     if (min != null && root.val <= min) return false;
     if (max != null && root.val >= max) return false;

     return helper(root.left, min, root.val) && helper(root.right, root.val, max);
   }

   public boolean isValidBSTOne(TreeNode root) {
     return helper(root, null, null);
   }

   // 采用中序遍历的方式检查是不是合法二叉搜索树
   // 根据二叉搜索树定义，每个元素都要比下一个元素小，
   public boolean isValidBST(TreeNode root) {
       Stack<TreeNode> stack = new Stack();
       double inorder = - Double.MAX_VALUE;
       
       while (!stack.isEmpty() || root != null) {
          while (root != null) {
             stack.push(root);
             root = root.left;
         }
         root = stack.pop();
         // If next element in inorder traversal 
         // is smaller than previous one
         // that's not BST
          if (root.val <= inorder) return false;
          inorder = root.val;
          root = root.right;
      }
       return true;
   }

 }