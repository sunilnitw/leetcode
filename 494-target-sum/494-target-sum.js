/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const findSum = (pos, sum)=>{
        if(sum === target && pos === nums.length) return 1;
        if(pos>=nums.length) return 0;
        return findSum(pos+1, sum+nums[pos])+findSum(pos+1, sum-nums[pos]);
    }
    return findSum(0, 0);
};