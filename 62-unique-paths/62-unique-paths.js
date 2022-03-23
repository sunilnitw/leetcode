/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let helper = [new Array(n).fill(1), new Array(n).fill(0)];
    
    helper[0][0] = 1;
    helper[1][0] = 1;
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            helper[i%2][j] = helper[i%2][j-1] + helper[(i-1)%2][j];
        }
    }
    return helper[(m-1)%2][n-1];
};