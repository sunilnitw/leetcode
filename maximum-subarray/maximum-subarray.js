/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0], sum = (max < 0) ? 0 : max;
    for(let i=1; i<nums.length; i++){
        sum += nums[i];
        // console.log(sum);
        if(sum>max){
            max = sum;
        }
        if(sum<0){
            sum = 0;
        }
    }
    return max;
};
