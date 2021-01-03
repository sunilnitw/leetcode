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
 * @return {number}
 */
var minDiffInBST = function(root) {
    var min = Number.MAX_SAFE_INTEGER, prev = null;
    function diff(root){
        if(root === null) return;
        diff(root.left);
        if(prev != null){
            if(min > root.val-prev){
                min = root.val-prev;
            }
        }
        prev = root.val;
        // if(root.left !== null && min > Math.abs(root.val-root.left.val)){
        //     min = Math.abs(root.val-root.left.val);
        // }
        // if(root.right !== null && min > Math.abs(root.val-root.right.val)){
        //     min = Math.abs(root.val-root.right.val);
        // }        
        diff(root.right);
    }
    diff(root);
    return min;
};
