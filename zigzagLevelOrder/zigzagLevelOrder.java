/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 * 思路是 一行是从左到右遍历，下一行是从右往左遍历，交叉往返的之字形的层序遍历
 * 用到栈的后进先出的特点，维护两个栈，相邻两行分别存到两个栈中，进栈的顺序也不相同，
 * 一个栈是先进左子结点然后右子节点，另一个栈是先进右子节点然后左子结点，
 * 这样出栈的顺序就是想要的之字形
 */
class ZigzagLevelOrder {
   public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
     TreeNode c=root;
     List<List<Integer>> ans = new ArrayList<List<Integer>>();
       
     if(c==null) return ans;
       
     Stack<TreeNode> s1 = new Stack<TreeNode>();
     Stack<TreeNode> s2 = new Stack<TreeNode>();
     s1.push(root);
       
     while(!s1.isEmpty()||!s2.isEmpty()) {
       List<Integer> tmp = new ArrayList<Integer>();
       
       while(!s1.isEmpty())
        {
            c=s1.pop();
            tmp.add(c.val);
            if(c.left!=null) s2.push(c.left);
            if(c.right!=null) s2.push(c.right);
        }
       
        ans.add(tmp);
        tmp = new ArrayList<Integer>();
       
        while(!s2.isEmpty())
        {
            c=s2.pop();
            tmp.add(c.val);
            if(c.right!=null)s1.push(c.right);
            if(c.left!=null)s1.push(c.left);
        }
       
        if(!tmp.isEmpty()) ans.add(tmp);
   }
 return ans;
 }
}