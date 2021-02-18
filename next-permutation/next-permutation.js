/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // 34792876
    if(nums.length <= 1) return nums;
    function swap(nums, i, j){
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    function reverse(nums, start){
        let i = start, j = nums.length-1;
        while(i<j){
            swap(nums, i,j);
            i++;j--;
        }
    }
    let first_descreaing = nums.length - 2, first_greater = nums.length-1;
    while(first_descreaing >= 0 && nums[first_descreaing] >= nums[first_descreaing + 1])first_descreaing--;
    if(first_descreaing >=0) {
    while(first_greater>=first_descreaing && nums[first_descreaing]>=nums[first_greater])first_greater--;
        // console.log(first_descreaing, first_greater, nums);
        swap(nums, first_greater, first_descreaing);
    }
    reverse(nums, first_descreaing+1);
    return nums;
};