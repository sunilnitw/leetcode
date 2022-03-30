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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    if(!root.left && !root.right) return 1;
    let m1 = Infinity, m2 = Infinity;
    if(root.left) m1= minDepth(root.left);
    if(root.right) m2= minDepth(root.right);
    // console.log(m1, m2, root)
    return 1+Math.min(m1, m2)
};