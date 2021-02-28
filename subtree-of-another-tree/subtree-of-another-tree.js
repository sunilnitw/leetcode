/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    function preorder(tree, isleft){
        if(tree === null){
            if(isleft)return "lnull";
            return "rnull";
        }
        return "$"+tree.val+"#"+preorder(tree.left, true) + preorder(tree.right, false);
    }
    let sp = preorder(s), tp = preorder(t);
    return sp.indexOf(tp) !== -1;
};