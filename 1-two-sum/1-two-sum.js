/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dict = {};
    // a+b = sum 
    for(let i=0; i<nums.length; i++){
        if(dict.hasOwnProperty(target - nums[i]))
            return [dict[target-nums[i]], i];
        dict[nums[i]] = i;
    }
};