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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    function isSumPath(root, target){
        if(root === null) return false;
        if(target === root.val && root.left === null && root.right === null)return true;
        return isSumPath(root.left, target-root.val) || isSumPath(root.right, target-root.val);
    }
    return isSumPath(root, targetSum);
};