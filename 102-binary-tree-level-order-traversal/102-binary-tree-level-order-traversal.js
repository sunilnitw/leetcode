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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root)return  [];
    let queue = [], res = [], temp = [];
    queue.push(root);
    queue.push(null);
    while(queue.length>0){
        let node = queue.shift();
        if(!node){
            res.push([...temp]);
            temp = [];
            if(queue.length>0)queue.push(null);
        } else {
            temp.push(node.val);
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
    }
    return res;
};