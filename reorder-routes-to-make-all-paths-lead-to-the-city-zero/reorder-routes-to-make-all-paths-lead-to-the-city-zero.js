/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let adjList = {}, count = 0;
    for(let i=0; i<n; i++)adjList[i] = [];
    for(let [a,b] of connections){
        adjList[a].push(b);
        adjList[b].push(-a);
    }
    function dfs(v, p){
        for(let newV of adjList[v]){
            let absV = Math.abs(newV);
            if(absV !== p){
                if(newV>0)count++;
                dfs(absV, v);
            }
        }
    }
    dfs(0, -1);
    return count;
};