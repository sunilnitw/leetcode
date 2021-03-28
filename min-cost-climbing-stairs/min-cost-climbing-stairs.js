/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let max = cost[0], len = cost.length;
    for(let i=2; i<len; i++){
        cost[i] = cost[i]+Math.min(cost[i-1], cost[i-2]);
    }
    return Math.min(cost[len-1], cost[len-2]);
};