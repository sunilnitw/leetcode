/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length ===0) return null;
    function bst(nums, root, l, h, isLeft){
        if(l>h)return;
        let mid = Math.ceil((l+h)/2), node = new TreeNode(nums[mid]);
        if(isLeft){
            root.left = node;
        }else {
            root.right = node;
        }
        root = node;
        bst(nums, root, l, mid-1, true);
        bst(nums, root, mid+1, h, false);
    }
    let l = nums.length-1, mid = Math.ceil(l/2);
    let root = new TreeNode(nums[mid]);
    bst(nums, root, 0, mid-1, true);
    bst(nums, root, mid+1, l, false);
    // console.log(root);
    return root;
};
