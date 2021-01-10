/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var row = matrix.length;
    if(row <= 1) return matrix;
    var col = matrix[0].length;
    if(col === 1)return matrix;
    
    for(let i=0; i<row/2; i++){
        for(let j=i; j<col-i-1; j++){
            let temp = matrix[j][col-i-1];
            let temp1 = matrix[row-i-1][col-j-1];
            matrix[j][col-i-1] = matrix[i][j];
            matrix[row-i-1][col-j-1] = temp;
            temp = temp1;
            temp1 = matrix[row-j-1][i];
            matrix[row-j-1][i] = temp;
            matrix[i][j] = temp1;
        }
    }
    return matrix;
};
