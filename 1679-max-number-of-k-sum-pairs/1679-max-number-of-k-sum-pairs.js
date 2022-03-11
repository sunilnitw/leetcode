/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0, dict = {};
    
    for(let i=0; i<nums.length; i++){
        if(dict[k-nums[i]]>0){
            dict[k-nums[i]]--;
            count++;
        } else {
            if(!dict.hasOwnProperty(nums[i])){
                dict[nums[i]] = 0;
            }
            dict[nums[i]]++;
        }
    }
    return count;
};