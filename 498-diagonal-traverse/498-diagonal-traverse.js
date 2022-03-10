/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const row = mat.length, col = mat[0].length;
    const sumArr = [];
    for(let i=0;i<row; i++){
        for(let j=0; j<col; j++){
            const sum = i+j;
            if(!sumArr[sum])sumArr[sum] = [];
            if(sum%2 === 1)
            sumArr[sum].push(mat[i][j]);
            else sumArr[sum].unshift(mat[i][j]);
        }
    }
    return sumArr.reduce((acc, arr)=>[...acc, ...arr], []);
};