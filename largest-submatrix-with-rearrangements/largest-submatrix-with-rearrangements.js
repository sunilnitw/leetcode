/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    let r = matrix.length, c = matrix[0].length, maxCount = 0;
    
    function maxContinous(arr){
        arr.sort((a,b)=>a-b);
        let res=0;
        for(let i=0;i<arr.length;i++)
            res=Math.max(res,arr[i]*(arr.length-i));
        return res;
    }
    for(let j=0;j<c;j++){
        for(let i=1;i<r;i++)
            matrix[i][j]=matrix[i][j]==0 ? 0 : 1+matrix[i-1][j];
    }
    // for(let i=0; i<r; i++){
    //     for(let j=1; j<c; j++){
    //         matrix[i][j] = matrix[i][j] === 0 ? 0 : 1+matrix[i-1][j];
    //     }
    // }
    for(let arr of matrix){
        maxCount = Math.max(maxCount, maxContinous(arr))
    }
    return maxCount;
};