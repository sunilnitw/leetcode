/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    
    function findLeftMost(root, isLeft){
        if(root.left === null && root.right === null) return null;
        if(root.next === null){
            return isLeft ? root.right : null;
        }
        if(isLeft && root.right){
            return root.right;
        }
        root = root.next;
        while(root.next !== null && root.left === null && root.right === null){
            root = root.next;
        }
        return root.left || root.right;
    }
    function connectNodes(node, next){
        if(node === null)return;
        node.next = next;
        // console.log(node.val, next)
        connectNodes(node.left, findLeftMost(node, true));
        connectNodes(node.right, findLeftMost(node, false));
    }
    if(root === null)return root;
    root.next = null;
    connectNodes(root, null);
    return root;
};