/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

 /**
 * 给定一个二叉树(不是二叉搜索树) 找出给定的两个结点的最近的公共父节点
 * 
 * 比如 这样一个二叉树  root = [3,5,1,6,2,0,8,null,null,7,4]
 * 
 *  3
   / \
  5   1
 / \  / \
6   2 0  8
   / \
  7   4
  
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出: 3
 * Explanation:  nodes 5 and 1 is 3. 
*/

class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // 递归方式
        if (root == null || root == p || root == q ) {
            return root;
        }
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        return left == null ? right : right == null ? left: root;
    }
}

// 二叉搜索树的版本
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // value of p
        int pVal = p.val;
        
        // value of q
        int qVal = q.val;
        
        // start from the root node of the tree
        TreeNode node = root;
        
        // 遍历树
        while (node != null) {
            // Value of ancestor/parent node
            int parentVal = node.val;
            
            if (pVal > parentVal && qVal > parentVal) {
                // if p and q are greater than parent
                node = node.right;
            } else if (pVal < parentVal && qVal < parentVal) {
                // lesser than parent 
                node = node.left;
            } else {
                // found the split point
                return node;
            }
        }
        return null;
    }
}