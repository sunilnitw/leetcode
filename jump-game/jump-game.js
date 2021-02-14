/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let dp = [];
    function isReached(start, length){
        if(dp[start] === false)return false;
        if(start>=length)return true;
        if(start<length && (start+nums[start] >= length-1 || dp[start] === true)) return true;
        for(let i=start+nums[start]; i<length  && i>start; i--){
            dp[start] = isReached(i,length);
            if(dp[start] === true)return true;
        }
        return false;
    }
    function canWeJump(nums){
        let lastPos = nums.length-1;
        for(let i=lastPos; i>=0; i--){
            if(i+nums[i]>=lastPos){
                lastPos = i;
            }
        }
        return lastPos === 0;
    }
    return canWeJump(nums);
    return isReached(0, nums.length);
};

/*
[100]
[2,0]
[2,3,1,1,4]
[3,2,1,0,4]
*/