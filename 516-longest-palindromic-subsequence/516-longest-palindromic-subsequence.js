/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let dp = [];
    for(let i=0; i<s.length; i++){
        dp.push(new Array(s.length).fill(0));
    }
    for(let i=0; i<s.length; i++){
        dp[i][i] = 1;
        for(let j=i-1; j>=0; j--){
            if(s[i] === s[j]){
                dp[i][j] = dp[i-1][j+1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j+1])
            }
        }
    }
    return dp[s.length-1][0];
};