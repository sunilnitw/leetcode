/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let len = inorder.length-1, pi = 0, map = {};
    inorder.forEach((val,i)=>{
        map[val] = i;
    });

    const construct = (il, ir)=>{
        if(il>ir) return null;
        let inPos = map[preorder[pi]], root = new TreeNode(preorder[pi++]);
        if(il === ir) return root;
        root.left = construct(il, inPos-1);
        root.right = construct(inPos+1, ir);
        return root;
    }
    
    return construct(0, len);
};