/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const len = strs.length, dp = [];
    
    for(let i=0; i<=m; i++)dp.push(new Array(n+1).fill(0));
    
    function getCount(str){
        let z = 0, o = 0;
        for(let ch of str){
            if(ch === '0')z++;
            else o++;
        }
        return {
            zero: z,
            one: o
        }
    }
    
    for(let str of strs){
        let {zero, one} = getCount(str);
        for(let z=m; z>=zero; z--){
            for(let o=n; o>=one; o--){
                dp[z][o] = Math.max(dp[z-zero][o-one]+1, dp[z][o]);
            }
        }
    }
    return dp[m][n];
};