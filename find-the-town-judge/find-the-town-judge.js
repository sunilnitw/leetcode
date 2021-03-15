/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    const graph ={};
    for(let i=0; i<trust.length; i++){
        if(!graph[trust[i][1]]){
            graph[trust[i][1]] = 0;
        }
        if(!graph[trust[i][0]]){
            graph[trust[i][0]] = 0;
        }
        graph[trust[i][1]]++;
        graph[trust[i][0]]--;
    }
    // console.log(graph);
    for(let i=1; i<=N; i++){
        if(graph[i] === N-1)return i;
    }
    return N===1 ? 1: -1;
};