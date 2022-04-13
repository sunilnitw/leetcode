/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((acc, val)=>acc+val,0);
    if(sum%2 === 1) return false;
    if(sum === 0) return true;
    
    const cache = {};
    const find = (pos, target)=>{
        if(target === 0) return true;
        if(target < 0 || pos>= nums.length) return false;
        if(cache.hasOwnProperty(target)) return cache[target]
        return (cache[target] = (find(pos+1, target-nums[pos]) || find(pos+1, target)));
    }
    return find(0, sum/2);
};