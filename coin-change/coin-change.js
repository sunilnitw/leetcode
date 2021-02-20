/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = [];
    function getCoinChange(coins, amount){
        
        if(amount<0)return -1;
        if(amount === 0)return 0;
        if(dp[amount]) {return dp[amount];}
        
        let minCount = Number.MAX_SAFE_INTEGER;
        for(let i=0; i<coins.length; i++){
            let c = getCoinChange(coins, amount-coins[i]);
            if(c>=0 && minCount>c){
                minCount = c+1;
            }
        }
        let minC = minCount === Number.MAX_SAFE_INTEGER ? -1 : minCount;
        dp[amount] =minC;
        return dp[amount];
        
    }
    return getCoinChange(coins, amount, 0);
};