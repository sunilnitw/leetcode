/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = {0: -1}, count = 0, maxLen= 0;
    for(let i=0; i<nums.length; i++){
        count = count + (nums[i] === 0 ? -1: 1);
        if(map.hasOwnProperty(count)){
            maxLen = Math.max(maxLen, i-map[count])
        } else {
            map[count] = i;
        }
    }
    return maxLen;
};