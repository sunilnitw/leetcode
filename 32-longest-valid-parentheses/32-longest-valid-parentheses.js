/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxCount = 0, dp = new Array(s.length).fill(0);
    for(let i=0; i<s.length; i++){
        if(s[i] === ')'){
            if(s[i-1] === '('){
                dp[i] = (dp[i-2] || 0)+2;
            } else if(dp[i-1]>=0 && s[i-dp[i-1]-1] === '('){
                dp[i] = dp[i-1] + (dp[i-dp[i-1]-2] || 0) + 2;
            }
        }
        maxCount = Math.max(maxCount, dp[i]);
    };
    return maxCount;
};