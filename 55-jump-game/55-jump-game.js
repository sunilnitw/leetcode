/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let nextPos = nums.length-1;
    for(let i=nums.length-2; i>=0; i--){
        if(nextPos<=(nums[i]+i)){
            nextPos = i;
        }
    }
    return nextPos === 0;
};