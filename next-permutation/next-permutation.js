/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length, leftEnding = len-2, rightEnding = len-1;
    if(len === 1) return;
    
    function reverse(nums, i, j){
        while(i<j){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }
    
    while(leftEnding>=0 && nums[leftEnding]>=nums[leftEnding+1])leftEnding--;
    if(leftEnding === -1){
        reverse(nums, 0, len-1);
    } else {
        rightEnding = leftEnding+1;
        while(rightEnding <= len-1 && nums[leftEnding]<nums[rightEnding])rightEnding++;
        rightEnding--;
        [nums[leftEnding], nums[rightEnding]] = [nums[rightEnding], nums[leftEnding]];
        reverse(nums, leftEnding+1, len-1);
    }
};