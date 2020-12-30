/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j=0;
    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[j]){
            j++;
            nums[j] = nums[i];
        }
    }
    // nums = nums.splice(0, j+1);
    return j+1;
};
