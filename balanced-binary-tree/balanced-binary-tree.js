/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var result = true;
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    result = true;
    depthTree(root);
    return result;
};
​
var depthTree = function(root){
    if(root == null || result == false) return 0;
    let l = depthTree(root.left);
    let r = depthTree(root.right);
    if(Math.abs(l-r)>1){
        result = false;
    }
    return Math.max(l, r)+1;
}
