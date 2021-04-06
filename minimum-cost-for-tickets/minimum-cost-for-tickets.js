/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const len = days.length, maxDay = days[len-1], dp = new Array(maxDay+1).fill(Infinity), set = new Set();
    days.forEach(day=>set.add(day));
    
    function minCost(d){
        if(d>maxDay) return 0;
        if(dp[d] != Infinity) return dp[d];
        let cost = Infinity;
        if(set.has(d)){
            cost = Math.min(cost, costs[0]+minCost(d+1), Math.min(costs[1]+minCost(d+7), costs[2]+minCost(d+30)));
        } else {
            cost = minCost(d+1);
        }
        dp[d] = cost;
        return dp[d];
    }
    return minCost(0);
};