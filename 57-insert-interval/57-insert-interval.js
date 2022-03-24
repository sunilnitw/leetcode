/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let l = 0, r = intervals.length-1, ans = [];
    
    while(l<=r && intervals[l][1]<newInterval[0])ans.push(intervals[l++])

    while(l<=r && intervals[l][0]<=newInterval[1]){
        newInterval[0] = Math.min(intervals[l][0], newInterval[0])
        newInterval[1] = Math.max(intervals[l][1], newInterval[1])
        l++;
    }
        
    ans.push(newInterval);
    while(l<=r)ans.push(intervals[l++]);
    
    return ans;
    
};