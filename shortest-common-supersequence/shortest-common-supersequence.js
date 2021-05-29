/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    function lcs(){
        let dp = [];
        for(let i=0; i<=str1.length; i++){
            dp.push(new Array(str2.length+1).fill(0));
        }
        
        for(let i=0; i<str1.length; i++){
            for(let j=0; j<str2.length; j++){
                if(str1[i] === str2[j]){
                    dp[i+1][j+1] = 1+dp[i][j];
                } else {
                    dp[i+1][j+1] = Math.max(dp[i][j+1], dp[i+1][j]);
                }
            }
        }
        let i=str1.length, j=str2.length, str = "";
        while(i>0 && j>0){
            if(dp[i-1][j] >= dp[i][j]){
                i--;
            } else if(dp[i][j-1] >= dp[i][j]){
                j--;
            } else {
                str = str2[j-1]+str;
                i--; j--;
            }
        }        
        return str;
    }
    
    let lcsStr = lcs(), i=0, len = lcsStr.length, i1=0, i2=0, str = "";
    while(i<len && i1<str1.length && i2<str2.length){
        while(i2<str2.length && str2[i2] != lcsStr[i]){str += str2[i2]; i2++};
        while(i1<str1.length && str1[i1] != lcsStr[i]){str += str1[i1]; i1++};
        str += lcsStr[i];
        i++; i1++; i2++;
    }
    
    if(i1<str1.length){
        str += str1.substr(i1);
    }
    if(i2<str2.length){
        str += str2.substr(i2);
    }
    return str;
};