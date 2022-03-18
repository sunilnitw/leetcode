/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length === 1)  nums;
    let len = nums.length-1, i=len;
    while(i>0 && nums[i]<=nums[i-1])i--;
    i--;
    let j = i+1;
    while(nums[j]>nums[i] && j<=len)j++;
    j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    while(i<len){
        [nums[i], nums[len]] = [nums[len], nums[i]];
        i++; 
        len--;
    }
};