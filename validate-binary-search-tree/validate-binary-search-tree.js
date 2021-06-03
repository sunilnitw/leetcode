/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let prev = null;
    function inorder(root){
        if(!root) return true;
        if(!inorder(root.left))return false;
        
        if(prev != null && root.val<=prev) return false;
        prev = root.val;
        return inorder(root.right);
    }
    return inorder(root);
    function findIsValid(root, min, max) {
        if(!root)return true;
        if(!root.left && !root.right)return true;
        if(root.val<min || root.val>max)return false;
        return findIsValid(root.left, min, root.val-1) && findIsValid(root.right, root.val+1, max);
    }
    
    return findIsValid(root, -Infinity, Infinity);
};