/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function(stones, k) {
    let n = stones.length, dp = [], sum = new Array(n+1).fill(0);
    if((n-1)%(k-1)!== 0) return -1;
    
    for(let i=1; i<=n; i++){
        dp.push(new Array(n).fill(0));
        sum[i]=sum[i-1]+stones[i-1];
    }
    
    for(let l=k; l<=n; l++){
        for(let i=0, j = l-1; (i+l)<=n; i++, j++){
            dp[i][j] = Infinity;
            for(let mid=i; mid<j; mid += (k-1)){
                dp[i][j] = Math.min(dp[i][j],dp[i][mid]+dp[mid+1][j]);
            }
            if((j-i)%(k-1) ===0){
                dp[i][j] += (sum[j+1]-sum[i])
            }
        }
    }
    return dp[0][n-1];
};