/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let len = nums.length, pos = len-1;
    
    if(len <= 1)return true;
    if(nums[0] === 0) return false;
    
    for(let i=len-2; i>=0; i--){
        if(nums[i]+i >= pos){
            pos = i;
        }
        // console.log(i, pos);
    }
    // console.log(pos)
    return pos === 0 ? true : false;
};