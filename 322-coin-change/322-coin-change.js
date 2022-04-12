/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = [new Array(amount+1).fill(Infinity), new Array(amount+1).fill(0)];
    dp[0][0] = 0;
    
    for(let i=0; i<coins.length; i++){
        for(let j=1; j<=amount; j++){
            if(coins[i]<=j){
                dp[(i+1)%2][j] = Math.min(dp[i%2][j], 1+dp[(i+1)%2][j-coins[i]]);
            } else {
                dp[(i+1)%2][j] = dp[i%2][j];
            }
        }
    }
    const count = dp[coins.length%2][amount];
    return count === Infinity ? -1 : count;
};