/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let dp = [], n = nums.length;
    if(n === 1) return nums[0];
    nums.push(1);
    nums.unshift(1);
    
    for(let i=0; i<n+2; i++){
        dp.push(new Array(n+2).fill(0));
    }
    
    for(let w=1; w<=n; w++){
        for(let i=1, j=w; j<=n; i++, j++){
            for(let mid = i; mid<=j; mid++){
                let m = nums[i-1]*nums[mid]*nums[j+1];
                let left = mid>i? dp[i][mid-1] : 0;
                let right = mid<j? dp[mid+1][j] : 0;
                dp[i][j] = Math.max(dp[i][j], m + left + right);
            }
        }
    }
    return dp[1][n];
};