/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let sum = 0, l = nums.length;
    for(let i=0; i<l; i++)sum ^= nums[i];
    return sum;
};
