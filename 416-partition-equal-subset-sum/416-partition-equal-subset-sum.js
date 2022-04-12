/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
   return bottomup(nums);
};

const bottomup = (nums)=>{
    const sum = nums.reduce((acc, val)=>acc+val,0);
    if(sum%2 === 1) return false;
    if(sum === 0) return true;
    
    const dp = [new Array(sum/2+1).fill(false), new Array(sum/2+1).fill(false)];
    dp[0][0] = true;
    dp[1][0] = true;
    for(let i=0; i<nums.length; i++){
        for(let j=1; j<=sum/2; j++){
            if(nums[i]<=j){
                dp[(i+1)%2][j] = dp[i%2][j] || dp[i%2][j-nums[i]];
            } else {
                dp[(i+1)%2][j] = dp[i%2][j];
            }
        }
        // console.log(dp)
    }
    
    return dp[nums.length%2][sum/2];
}

const topdown = (nums)=>{
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
}