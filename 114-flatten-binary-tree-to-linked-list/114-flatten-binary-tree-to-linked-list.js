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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root || (!root.left && !root.right)) return root;
    let node = root;
    let l = flatten(root.left);
    node.left = null;
    let tr = node.right;
    if(l){
        node.right=l;
        while(l.right){l = l.right;}
        l.right=tr;
    }
    // console.log('--', l, node, tr)
    let r = flatten(tr);
    // console.log(l,r,node)
   
    return node;
};