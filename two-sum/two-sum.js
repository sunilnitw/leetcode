/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {}, end = 0;
    for(let i=0; i<nums.length; i++){
        if(hash.hasOwnProperty(target-nums[i])){
            end = i; 
            break;
        }
        hash[nums[i]] = i;
    }
    return [hash[target-nums[end]], end];
};
