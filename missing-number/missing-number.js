/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = nums.reduce((a, b)=>a+b);
    for(let i=0; i<=nums.length; i++){
        sum -= i;
    }
    return Math.abs(sum);
};