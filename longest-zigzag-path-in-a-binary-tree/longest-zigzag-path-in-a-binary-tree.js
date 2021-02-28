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
 * @return {number}
 */
var longestZigZag = function(root) {
    if(root === null)return 0;
    function maxZigZag(node, direction, count){
        if(!node)return count;
        if(direction === true){
            return node.left ? maxZigZag(node.left, !direction, count+1) : count;
        } else {
            return node.right ? maxZigZag(node.right, !direction, count+1) : count;
        }
    }
    function findLongest(root, direction){
        if(!root) return;
    let zigZagC = Math.max(maxZigZag(root, direction, 0), maxZigZag(root, !direction, 0));
        if(zigZagC > longest){
            longest = zigZagC;
        }
        
        findLongest(root.left, true);
        findLongest(root.right, false);
    }
    let longest = 0;
    // findLongest(root, true);
    function maxZigZagCalc(node, direction){
        if(node === null)return 0;
        let left = maxZigZagCalc(node.left, true);
        let right = maxZigZagCalc(node.right, false);
        longest = Math.max(longest, left);
        longest = Math.max(longest, right);
        return (direction ? right : left)+1;
    }
    maxZigZagCalc(root, true);
    return longest;
};