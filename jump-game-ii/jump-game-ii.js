/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let dp = {}, len = nums.length-1;
    if(len === 0) return 0;
    function findSteps(pos){
        if(nums[pos]+pos >= len) return 1;
        if(dp[pos] && dp[pos] != Infinity) return dp[pos];
        let minCount = Infinity;
        for(let i=nums[pos]+pos; i> pos; i--){
            minCount = Math.min(minCount, 1+findSteps(i))
        }
        dp[pos] = minCount;
        return minCount;
    }
    return findSteps(0);
};