/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [];
    const comb = (pos, l, arr)=>{
        if(pos === k){
            ans.push([...arr]);
            return;
        }
        for(let i=l; i<=n; i++){
            arr[pos] = i;
            comb(pos+1, i+1, arr);
        }
    }
    comb(0, 1, new Array(k));
    return ans;
};