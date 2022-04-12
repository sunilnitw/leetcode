/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = [new Array(amount+1).fill(0), new Array(amount+1).fill(0)];
    dp[0][0] = 1;
    dp[1][0] = 1;
    for(let i=0; i<coins.length; i++){
        for(let j=1; j<=amount; j++){
            dp[(i+1)%2][j] = dp[i%2][j] + (j>=coins[i] ? dp[(i+1)%2][j-coins[i]] : 0)
        }
    }
    return dp[coins.length%2][amount];
};