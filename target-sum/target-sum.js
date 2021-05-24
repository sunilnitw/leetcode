/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let hash = {}, len = nums.length, count = 0;
    function findTarget(pos, target){
        const key = `${pos}_${target}`;
        if(pos === len && target === 0) return 1;
        if(hash.hasOwnProperty(key)) {
            return hash[key];
        };
        if(pos>=len)return 0;
        return hash[key]=findTarget(pos+1, target-nums[pos]) + findTarget(pos+1, target+nums[pos]);
    }
    
    return findTarget(0, target);
};