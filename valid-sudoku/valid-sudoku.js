/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
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
    
    function isSolvable(board){
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++){
                if(board[i][j] != ".") {
                    let num = board[i][j];
                    board[i][j] = '.';
                    if(isValidPlace(board, i, j,num)){
                        board[i][j] = num;
                    }else {
                        board[i][j] = num;
                        return false;
                    }
                }
            }
        }
        return true;
    }
    return isSolvable(board);
};