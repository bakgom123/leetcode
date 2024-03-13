/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode invertTree(TreeNode root) {
        #check if it is an empty tree, and if so, return null
        if (root == null) {
            return null;
        }
	
    	#스왑해주기!
        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;
		
        #recursive call
        invertTree(root.left);
        invertTree(root.right);

        return root;
    }
}