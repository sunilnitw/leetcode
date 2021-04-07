/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let sqrt = parseInt(Math.sqrt(n)), arr = new Array(sqrt+1), cache = {};
    for(let i=1; i<=sqrt; i++)arr[i] = i*i;
    
    function findCount(num){
        let sqrt = parseInt(Math.sqrt(num));
        if(num%arr[sqrt] === 0) return num/arr[sqrt];
        if(cache[num]) return cache[num];
        
        let count = Infinity;
        for(let s = sqrt; s>=1; s--){
            count = Math.min(count, 1+findCount(num-(s*s)));
        }
        
        cache[num] = count;
        return count;
    }
    
    return findCount(n);
};