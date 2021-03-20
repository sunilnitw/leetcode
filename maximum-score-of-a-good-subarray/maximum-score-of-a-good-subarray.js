/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    let i = k, j=k, maxSum = nums[k], min = nums[k], index = 0;
    while(i>0 || j<nums.length-1){
        
        if(i===0){
            j++;
        } else if(j === nums.length-1){
            i--;
        } else if(nums[i-1]<nums[j+1]){
            j++;
        } else {
            i--;
        }
        min = Math.min(min, Math.min(nums[i], nums[j]));
        maxSum = Math.max(maxSum, min*(j-i+1));
        
        // console.log(i, j, min, maxSum);
        
    }
    return maxSum;
};