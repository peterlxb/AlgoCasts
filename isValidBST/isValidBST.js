/**
 * 检查是否是一颗合法的二叉搜索数
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return helper(root, null, null);
};

var helper = function(root, min, max) {
  if (root === null) {
    return true;
  }

  if (min != null && root.val <= min) {
    return false;
  }

  if (max != null && root.val >= max) {
    return false;
  }

  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
};
