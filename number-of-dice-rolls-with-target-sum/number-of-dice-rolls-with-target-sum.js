/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
    const modValue = Math.pow(10, 9)+7, cache = {};
    
    function roll(d, f, t){
        const key = `${d}_${t}`;
        
        if(t===0 && d === 0) return 1;
        if(t<=0 || d<=0) return 0;
        if(cache.hasOwnProperty(key)) return cache[key];
        
        let count = 0;
        for(let i=1; i<=f; i++){
            count += roll(d-1, f, t-i)%modValue;;
            count %= modValue;
        }
        cache[key] = count;
        return cache[key];
    }
    return roll(d, f, target);
};