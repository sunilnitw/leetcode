/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const sum = nums.reduce((a,b)=>a+b);
    let leftSum = 0, rightSum = sum, i = 0;
    while(i<nums.length){
        if(leftSum === rightSum-leftSum-nums[i]) return i;
        leftSum+=nums[i];
        i++;
    }
    return -1;
};