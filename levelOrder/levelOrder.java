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
 * 按层遍历二叉树
 * Java版本BFS 
 */
class LevelOrder {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root == null) {
            return res;
        }
        
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        
        while(!q.isEmpty()) {
            int levelSize = q.size();
            List<Integer> currLevel = new ArrayList<>();
            
            for (int i = 0;i < levelSize; i++) {
                TreeNode currNode = q.poll();
                currLevel.add(currNode.val);
                if (currNode.left != null) {
                    q.add(currNode.left);
                }
                if (currNode.right != null) {
                    q.add(currNode.right);
                }
            }
            res.add(currLevel);
        }
        return res;
    }
    
    // DFS 深度优先搜索算法
    public List<List<Integer>> levelOrder1(TreeNode root) {
        if (root == null) {
            return new ArrayList<>();
        }
        
        List<List<Integer>> list = new ArrayList<>();
        
        dfs(root, list, 1);
        return list;
        
    }
    
    public void dfs(TreeNode root, List<List<Integer>> list, int level) {
        if (root == null) return;
        
        if (list.size() < level) {
            list.add(new ArrayList<>());
        }
        
        list.get(level - 1).add(root.val);
        dfs(root.left, list, level + 1);
        dfs(root.right, list, level + 1);
    }
}