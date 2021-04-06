/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const r = matrix.length, c = matrix[0].length;
    let ans = Infinity;
    for(let i=r-2; i>=0; i--){
        for(let j=0; j<c; j++){
            let min = matrix[i+1][j];
            if(j>0){
                min = Math.min(min, matrix[i+1][j-1])
            }
            if(j<c-1){
                min = Math.min(min, matrix[i+1][j+1]);
            }
            // console.log(i, j, min);
            matrix[i][j] += min;
        }
    }
    for(let i=0; i<c; i++){
        ans = Math.min(ans, matrix[0][i]);
    }
    return ans;
};