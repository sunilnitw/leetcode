/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let m = matrix.length-1, n = matrix[0].length-1, l=0, mid=0, r = m;
    if(target<matrix[0][0] || target>matrix[m][n])  return false;
    
    while(l<=r){
        mid = l + parseInt((r-l)/2);
        if(matrix[mid][0]<=target && target<=matrix[mid][n])break;
        if(matrix[mid][0]>target){
            r = mid-1;
        } else {
            l = mid+1;
        }

    }
    let foundRow = mid;
    l = 0; mid = 0; r = n;
    while(l<=r){
        mid = l + parseInt((r-l)/2);
        if(matrix[foundRow][mid] === target) return true;
        if(matrix[foundRow][mid]>target){
            r = mid-1;
        } else {
            l = mid+1;
        }
    }
    return false;
};