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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let rightView = [], queue = [], isNewLavel = true;
    if(root === null) return rightView;
    queue.push(root);
    queue.push(null);
    while(queue.length>0){
        let node = queue.shift();
        if(node === null){
            if(isNewLavel === false)queue.push(null);
            isNewLavel = true;
        } else {
            if(isNewLavel){
                rightView.push(node.val);
                isNewLavel = false;
            }
            node.right && queue.push(node.right);
            node.left && queue.push(node.left);
        }
    }
    return rightView;
};