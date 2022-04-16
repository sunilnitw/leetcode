/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const cache = {};
    const findSum = (pos, sum)=>{
        const key = `${pos}_${sum}`;
        if(sum === target && pos === nums.length) return 1;
        if(pos>=nums.length) return 0;
        if(cache.hasOwnProperty(key)) return cache[key];
        return (cache[key] = findSum(pos+1, sum+nums[pos])+findSum(pos+1, sum-nums[pos]));
    }
    return findSum(0, 0);
};