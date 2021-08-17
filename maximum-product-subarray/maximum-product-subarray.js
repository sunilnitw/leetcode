/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max_so_far = nums[0], min_so_far = nums[0], current = nums[0], max = Math.max(max_so_far, min_so_far);
    
    for(let i=1; i<nums.length; i++){
        [max_so_far, min_so_far] = [Math.max(nums[i], Math.max(nums[i]*max_so_far, nums[i]*min_so_far)),Math.min(nums[i], Math.min(nums[i]*max_so_far, nums[i]*min_so_far))];
        max = Math.max(max, Math.max(max_so_far, min_so_far));
    }
    return max;
};