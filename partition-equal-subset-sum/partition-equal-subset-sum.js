/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0, l = nums.length;
    for(let i=0;i<l; i++)sum += nums[i];
    if(sum%2 ===1)return false;
    sum = sum/2;
    let ref = [];
    for(let i=0; i<=l; i++)ref.push(new Array(sum+1));
    for(let i=0; i<=l; i++)ref[i][0] = 0;
    for(let i=0; i<=sum ; i++)ref[0][i] = 0;
    
    for(let i=1; i<=l; i++){
        for(let j=1; j<=sum; j++){
            if(j>=nums[i-1])
                ref[i][j] = Math.max(ref[i-1][j], ref[i-1][j-nums[i-1]]+nums[i-1]);
            else 
                ref[i][j] = ref[i-1][j];
        }
    }
    // console.log(ref);
    if(ref[l][sum] === sum) return true;
    return false;
    
};
