/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity, sum = 0;
    for(let num of nums){
        sum += num;
        if(sum>maxSum){
            maxSum = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    return maxSum;
};