/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const cache = {};
    const jump = (pos)=>{
        if(cache.hasOwnProperty(pos))return cache[pos];
        if(pos>=nums.length-1) return 0;
        cache[pos] = 1;
        let min = Infinity
        for(let i=nums[pos]; i>0; i--){
            min = Math.min(min, cache[pos]+jump(i+pos));
        }
        cache[pos] = min;
        return cache[pos];
    }
    return jump(0);
};