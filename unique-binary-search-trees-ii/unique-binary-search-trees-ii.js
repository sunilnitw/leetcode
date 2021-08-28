/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    function generate(l, r){
        let trees = [];
        if(l>r){
            trees.push(null);
            return trees;
        }
        for(let i=l; i<=r; i++){
            let leftList = generate(l, i-1);
            let rightList = generate(i+1, r);
            for(let leftNode of leftList){
                for(let rightNode of rightList){
                    let root = new TreeNode(i);
                    root.left = leftNode;
                    root.right = rightNode;
                    trees.push(root);
                }
            }
        }
        return trees;
    }
    
    return generate(1, n);
};