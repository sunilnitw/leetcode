/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length, n = text2.length, arr = [];
    for(let i=0; i<=m; i++)arr.push(new Array(n+1).fill(0));
    
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            if(text1[i-1] === text2[j-1]){
                arr[i][j] = 1+arr[i-1][j-1];
            } else {
                arr[i][j] = Math.max(arr[i-1][j], arr[i][j-1]);
            }
        }
    }
    return arr[m][n];
};