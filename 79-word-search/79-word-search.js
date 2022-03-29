/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
     const m = board.length, n = board[0].length, temp = [];
     const dfs = (i, j, pos)=>{
         if(pos>=word.length) return true;
         if(i<0  || i>=m || j<0 || j>=n || temp[i][j]===1 || board[i][j] !== word[pos] ) return false;
         temp[i][j] = 1;
         let res = dfs(i+1, j, pos+1) || dfs(i, j+1, pos+1)|| dfs(i-1, j, pos+1) || dfs(i, j-1, pos+1);
         temp[i][j] = 0;
         return res;
     }
     for(let k=0; k<m; k++){
         temp.push(new Array(n).fill(0));
     }
     for(let i=0; i<m; i++){
         for(let j=0; j<n; j++){
             if(dfs(i, j, 0))  return true;
         }
     }
    return false;
};