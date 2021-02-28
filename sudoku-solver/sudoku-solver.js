/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function isValidInRow(board, r, c, val){
        for(let i=0; i<9; i++){
            if(board[r][i] == val){
                return false;
            }
        }
        return true;
    }
    function isValidInCol(board, r, c, val){
        for(let i=0; i<9; i++){
            if(board[i][c] == val){
                return false;
            }
        }
        return true;
    }
    function isValidInGrid(board, r, c, val){
        let rG = parseInt(r/3), cG = parseInt(c/3);
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                if(board[rG*3+i][cG*3+j]==val){
                    return false;
                }
            }
        }
        return true;
    }
    
    function isValidPlace(board, r, c, val){
        return isValidInRow(board, r, c, val) && isValidInCol(board, r, c, val) && isValidInGrid(board, r, c, val);
    }
    
    function getEmptyPos(board){
        for(let i=0; i<9; i++){
            for(let j=0;j<9; j++){
                if(board[i][j] === '.'){
                    return [i,j];
                }
            }
        }
        return [];
    }
    
    function fillSudoku(board){
        
        let pos = getEmptyPos(board);
        if(pos.length === 0) return true;
        let [r, c] = pos;
        // console.log(r,c)
        
        for(let val = 1; val<=9; val++){
            if(isValidPlace(board, r, c, val)){
                board[r][c] = ""+val;
                if(fillSudoku(board) === true){
                    return true;
                } else {
                    board[r][c] = '.';
                }
            }
        }

        return false;
    }
    fillSudoku(board);
};