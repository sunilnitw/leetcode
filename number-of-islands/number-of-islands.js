/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    function countMax(i, j, r, c){
        if(i<0 || j<0 || i>=r || j>=c || grid[i][j] == 0 || grid[i][j] == 2)return;
        grid[i][j] = 2;
        countMax(i+1, j, r, c);
        countMax(i, j+1, r, c);
        countMax(i-1, j, r, c);
        countMax(i, j-1, r, c);
    }
    
    let r = grid.length, c = grid[0].length, maxCount = 0;
    for(let i=0; i<r; i++){
        for(let j=0; j<c; j++){
            if(grid[i][j] == 1){
                maxCount++;
                countMax(i, j, r, c);
            }
        }
    }
    return maxCount;
};