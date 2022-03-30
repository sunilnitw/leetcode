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
    const isValid = (root, min, max)=>{
        if(!root) return true;
        if(root.val<min || root.val>max) return false;
        if(!root.left && !root.right)return true;
        return isValid(root.left, min, root.val-1) && isValid(root.right, root.val+1, max);
    }
    return isValid(root, -Infinity, Infinity);
};