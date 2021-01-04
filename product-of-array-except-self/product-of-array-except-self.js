/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length);
    answer[0] = 1, prod = 1;
    for(let i=1; i<nums.length; i++){
        answer[i] = answer[i-1]*nums[i-1];
    }
    for(let i = nums.length-1; i>=0; i--){
        answer[i] *= prod;
        prod *= nums[i];
    }
    return answer;
};
/**
[2,3,4,5]
[60, 40, 30, 24]
*/
