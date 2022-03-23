/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length, n = grid[0].length;
    let costs = [new Array(n), new Array(n).fill(0)];
    
    costs[0][0] = grid[0][0];
    for(let i=1; i<n; i++){
        costs[0][i] = costs[0][i-1]+grid[0][i];
    }
    
    if(m === 1) return costs[0][n-1];
    
    for(let i=1;  i<m; i++){
        costs[i%2][0] = grid[i][0]+costs[(i-1)%2][0];
        for(let j = 1;  j<n; j++){
            costs[i%2][j] = grid[i][j] + Math.min(costs[i%2][j-1], costs[(i-1)%2][j]);
        }
    }
    
    return costs[(m-1)%2][n-1];
};