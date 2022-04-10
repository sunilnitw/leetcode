/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length, n = word2.length, arr = [];
    if(!m || !n) return m || n;
    
    arr.push(new Array(n+1));
    arr.push(new Array(n+1).fill(0));
    for(let i=0;i<=n; i++){
        arr[0][i] = i;
    }
    arr[1][0] = 1;
    
    for(let i=1, r;i<=m; i++){
        r = i%2;
        arr[r][0] = i;
        for(let j=1; j<=n; j++){
            if(word1[i-1] === word2[j-1]){
                arr[r][j] = arr[(i-1)%2][j-1];
            } else {
                arr[r][j] = 1+Math.min(arr[(i-1)%2][j-1], Math.min(arr[(i-1)%2][j], arr[r][j-1]))
            }
        }
    }
    return arr[m%2][n];
};