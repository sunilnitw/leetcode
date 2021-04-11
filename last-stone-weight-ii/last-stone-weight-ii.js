/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let len = stones.length, set = new Set();
    set.add(0);
    for(let s of stones){
        let tempSet = new Set();
        for(let st of set){
            tempSet.add(st - s);
            tempSet.add(st + s);
        }
        set = tempSet;
    }
    let ans = Infinity;
    for(let s of set){
        ans = Math.min(ans, Math.abs(s));
    }
    return ans;
};