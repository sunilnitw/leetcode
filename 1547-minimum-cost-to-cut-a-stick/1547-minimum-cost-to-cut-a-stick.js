/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    cuts.push(0);
    cuts.push(n);
    cuts.sort((a,b)=>a-b);
    let len = cuts.length, dp = [];
    for(let i=0; i<len; i++){
        dp.push(new Array(len).fill(0));
    }
    
    for(let i=len-1; i>=0; i--){
        for(let j=i+1; j<len; j++){
            for(let k=i+1; k<j; k++){
                dp[i][j] = Math.min(dp[i][j] || Infinity, cuts[j]-cuts[i] + dp[i][k]+dp[k][j])
            }
        }
    }
    console.log(dp)
    
    return dp[0][len-1];
    
    // let cache = {};
    // const findCost = (pos, l, r)=>{
    //     let min = Infinity, key = `${l}_${r}`;
    //     if(cache.hasOwnProperty(key))return cache[key];
    //     for(let i=pos; i<n; i++){
    //         if(cuts[i]>l && cuts[i]<r) {
    //             [cuts[i],cuts[pos]] = [cuts[pos], cuts[i]];
    //             min = Math.min(min, (r-l) + findCost(pos+1, l, cuts[pos]) + findCost(pos+1, cuts[pos], r));
    //             [cuts[i],cuts[pos]] = [cuts[pos], cuts[i]];
    //         }
    //     }
    //     return (cache[key] = (min === Infinity ? 0 : min));
    // }
    // return findCost(0,0,n);
};