/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max_end = nums[0], min_end = nums[0], max = Math.max(max_end, min_end);
    for(let i=1; i<nums.length; i++){
        
        [max_end, min_end] = [Math.max(nums[i], Math.max(max_end*nums[i], min_end*nums[i])),
         Math.min(nums[i], Math.min(max_end*nums[i], min_end*nums[i]))];
        max = Math.max(max, Math.max(max_end, min_end));
    }
    return max
};