/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for(let i=0; i<nums.length; i++){
        let j = Math.abs(nums[i]);
        if(nums[j-1] < 0){
            return j;
        }
        nums[j-1] = -nums[j-1];
    }
};
