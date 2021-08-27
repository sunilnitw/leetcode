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
    function findLCA(root, p, q){
        if(!root) return null;
        let left = findLCA(root.left, p, q);
        let right = findLCA(root.right, p, q);
        if(root.val === p.val || root.val === q.val || (left && right))
            return root;
        return left || right;
    }
    return findLCA(root, p, q);
};