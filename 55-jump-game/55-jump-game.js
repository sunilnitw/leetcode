/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const cache = {};
    const jump = (pos)=>{
        if(cache.hasOwnProperty(pos))return cache[pos];
        if(pos === nums.length-1) return true;
        if(pos>=nums.length) return false;
        for(let i=nums[pos]; i>0; i--){
            cache[pos] = jump(i+pos);
            if(cache[pos] === true) return true; 
        }
        return false;
    }
    return jump(0);
};