/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>{
        if(a[0]-b[0] === 0) return a[1]-b[1];
        return a[0]-b[0];
    });
    
    if(intervals.length === 1) return intervals;
    let start =  intervals[0][0], end = intervals[0][1], ans = [];
    for(i=1; i<intervals.length; i++){
        if(intervals[i][0]<=end){
            end = Math.max(end, intervals[i][1]);
        } else {
            ans.push([start, end]);
            [start, end] = intervals[i];
        }
        // console.log(start, end)
    }
    ans.push([start, end]);
    return ans;
};