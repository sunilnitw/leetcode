/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let ans = 0, d = 2;
    while(n>1){
        while(n%d === 0){
            ans += d;
            n = parseInt(n/d);
        }
        d++;
    }
    return ans;
};