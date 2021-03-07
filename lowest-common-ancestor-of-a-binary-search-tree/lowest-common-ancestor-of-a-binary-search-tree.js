/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function least(root, p, q){
        if(root.val >= p.val && root.val <= q.val) return root;
        if(root.val > q.val){
            return least(root.left, p, q);
        } else {
            return least(root.right, p, q);
        }
    }
    if(p.val > q.val){
        let temp = p;
        p = q;
        q = temp;
    }
    return least(root, p, q);
};