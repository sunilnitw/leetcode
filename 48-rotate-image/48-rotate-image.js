/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
   
    for(let i=0; i<n/2; i++){
        for(let j=i; j<(n-i-1); j++){
            let prev = matrix[j][i];
            matrix[j][i]  = matrix[n-i-1][j];
            
            let prev1 = matrix[i][n-j-1];
            matrix[i][n-j-1] = prev;
            
            prev = prev1;
            prev1 = matrix[n-j-1][n-i-1];
            matrix[n-j-1][n-i-1] = prev;
            
            matrix[n-i-1][j] = prev1;
            
        }
    }
};