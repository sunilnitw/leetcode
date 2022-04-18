/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((acc, val)=>acc+val,0);
    if(Math.abs(target)>sum || (target+sum)%2 !== 0) return 0;
    const newTarget = (target+sum)/2;
    let dp = [new Array(newTarget+1).fill(0), new Array(newTarget+1).fill(0)];
    dp[0][0] = 1;
    dp[1][0] = 1;
    
    for(let i=1; i<=nums.length; i++){
        for(let j=0; j<=newTarget; j++){
            if(nums[i-1]<=j){
                dp[i%2][j] = dp[(i-1)%2][j] + dp[(i-1)%2][j-nums[i-1]];
            } else {
                dp[i%2][j] =  dp[(i-1)%2][j]; 
            }
        }
    }
    
    return dp[nums.length%2][newTarget];
    
    // const cache = {};
    // const findSum = (pos, sum)=>{
    //     const key = `${pos}_${sum}`;
    //     if(sum === target && pos === nums.length) return 1;
    //     if(pos>=nums.length) return 0;
    //     if(cache.hasOwnProperty(key)) return cache[key];
    //     return (cache[key] = findSum(pos+1, sum+nums[pos])+findSum(pos+1, sum-nums[pos]));
    // }
    // return findSum(0, 0);
};