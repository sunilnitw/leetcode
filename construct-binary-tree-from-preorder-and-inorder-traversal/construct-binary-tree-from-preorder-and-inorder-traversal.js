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
    function getInorderHash(inorder){
        let hash = {};
        inorder.forEach((ele, i)=>{hash[ele] = i;});
        return hash;
    }
    let inorderHash = getInorderHash(inorder), pi = 0;
    function constructArr(preorder, start, end, str){
        if(start>end)return null;
        // console.log(start, end, str);
        let ind = inorderHash[preorder[pi]];
        let node = new TreeNode(preorder[pi++], null, null);
        if(start === end)return node;
        node.left = constructArr(preorder, start, ind-1, "left");
        node.right = constructArr(preorder, ind+1, end, "right");
        return node;
    }
    return constructArr(preorder, 0, preorder.length-1, "root");
};