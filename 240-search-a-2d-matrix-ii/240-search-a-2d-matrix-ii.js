/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length-1, n = matrix[0].length-1;
    if(matrix[0][0]>target || target>matrix[m][n])return false;
    
    let r = 0, c = n;
    while(r<=m && c>=0){
        if(matrix[r][c] === target) return true;
        if(matrix[r][c]>target)
            c--;
        else 
            r++;
    }
    return false;
};