/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jend = 0, far = 0, jmp = 0;
    for(let i=0; i<nums.length-1; i++){
        far = Math.max(far, nums[i]+i)
        if(i === jend){
            jmp++;
            jend = far;
        }
    }
    return jmp;
    
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