/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let set = new Set(), day = new Array(366).fill(Infinity);
    days.forEach(ele=>set.add(ele));
    function dp(i){
        if(i>365)return 0;
        if(day[i] != Infinity) return day[i];
        let ans = Infinity;
        if(set.has(i)){
            ans = Math.min(ans, dp(i+1)+costs[0], Math.min(dp(i+7)+costs[1], dp(i+30)+costs[2]));
        } else {
            ans = dp(i+1);
        }
        day[i] = ans;
        return day[i];
    }
    return dp(0);
};