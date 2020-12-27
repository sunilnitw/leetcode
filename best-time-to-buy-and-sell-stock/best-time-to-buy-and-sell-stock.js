/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, sum = 0;
    for(let i=1; i<prices.length;i++){
        sum += (prices[i]-prices[i-1]);
        if(sum < 0){
            sum = 0;
        } else if(profit<sum){
            profit = sum;
        }
    }
    return profit;
};
