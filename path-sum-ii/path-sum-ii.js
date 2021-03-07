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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var ans = [];
    function isSumPath(root, target, temp){
        if(root === null) return;
        temp.push(root.val);
        if(target === root.val && root.left === null && root.right === null){
            ans.push([...temp]);
        }
        isSumPath(root.left, target-root.val, temp);
        isSumPath(root.right, target-root.val, temp);
        temp.pop();
    }
    isSumPath(root, sum, []);
    return ans;
};