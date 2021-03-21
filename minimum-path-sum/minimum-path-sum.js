/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let row = grid.length, col = grid[0].length, temp = [new Array(col).fill(0), new Array(col).fill(0)];
    temp[0][0] = grid[0][0];
    for(let i=1; i<col; i++)temp[0][i] = temp[0][i-1] + grid[0][i];
    // console.log(temp);
    for(let i=1; i<row; i++){
        for(let j=0; j<col; j++){
            if(j===0){
                temp[i%2][j] = temp[(i+1)%2][j] + grid[i][j];
            } else{
                temp[i%2][j] = grid[i][j] + Math.min(temp[(i+1)%2][j], temp[i%2][j-1]);
            }
        }
        // console.log(temp);
    }
    return temp[(row+1)%2][col-1];
};