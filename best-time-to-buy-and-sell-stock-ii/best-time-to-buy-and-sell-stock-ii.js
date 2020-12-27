/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for(let i=1, j=0; i<prices.length;){
        j = i-1;
        while(prices[i-1]<prices[i]){
            i++;
        }
        if(j == i-1)i++;
        else profit += (prices[i-1]-prices[j]);
    }
    return profit;
};
