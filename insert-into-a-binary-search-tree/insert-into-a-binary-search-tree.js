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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    function findEle(root, prevRoot, val){
        if(root == null)return prevRoot;
        if(root.val === val)return prevRoot;
        if(root.val > val){
            return findEle(root.left, root, val);
        } else {
            return findEle(root.right, root, val);
        }
    }
    var prevEle = findEle(root, root, val), node = new TreeNode(val);
    if(root === null) return node;
    if(prevEle.val > val) prevEle.left = node;
    else prevEle.right = node;
    return root;
};
