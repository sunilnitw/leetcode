/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function(jobs, k) {
    var max = Number.MAX_SAFE_INTEGER, workers = new Array(k).fill(0);
    function dfs(curr, currMaxTime){
        if(currMaxTime>max)return max;
        if(curr === jobs.length){max = Math.min(max, currMaxTime);  return max;}
        const hash = {};
        for(let i=0; i<k; i++){
            if(!hash[workers[i]]){
                workers[i] += jobs[curr];
                dfs(curr+1, Math.max(currMaxTime, workers[i]));
                workers[i] -= jobs[curr];
                hash[workers[i]] = true;
            }
        }
    }
    dfs(0, 0);
    return max;
};