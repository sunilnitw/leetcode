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
 * @return {number}
 */
var minDepth = function(root) {
    if(root == null) return 0;
    let queue = [], lavel = 1;
    queue.push(root);
    queue.push(null);
    while(queue.length > 0){
        let node = queue[0];
        queue.shift();
        if(node == null){
            if(queue.length>0){
                queue.push(null);
                lavel++;
            }
        } else {
            if(node.left == null && node.right == null) return lavel;
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
    }
};
​
