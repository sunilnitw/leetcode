/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
    let dp = [], n = values.length;
    for(let i=0; i<n; i++){
        dp.push(new Array(n).fill(0));
    }
    
    for(let i=n-1; i>=0; i--){
        for(let j=i+1; j<n; j++){
            for(let k=i+1; k<j;k++){
                dp[i][j] = Math.min(dp[i][j] === 0 ? Infinity : dp[i][j], values[i]*values[j]*values[k] + dp[i][k]+dp[k][j]);
            }
        }
    }
    return dp[0][n-1];
};