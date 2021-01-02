/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var ele;
    function kthElement(root){
        if(root === null)return;
        kthElement(root.left, k);
        k--;
        if(k === 0) ele = root.val;
        kthElement(root.right, k);
    }
    kthElement(root);
    return ele;
};
