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
    const isValid = (root, l, r)=>{
        if(root === null) return true;
        if(root.val>=l || root.val<=r || (root.left && root.left.val >= root.val) || (root.right && root.right.val <= root.val)){
            return false;
        }
        let res = isValid(root.left, Math.min(l, root.val), r);
        if(!res)return res;
        return isValid(root.right, l, Math.max(r, root.val));
    }
    return isValid(root, Infinity, -Infinity);
};