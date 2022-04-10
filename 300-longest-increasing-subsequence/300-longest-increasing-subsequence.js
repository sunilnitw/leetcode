/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let lis = new Array(nums.length).fill(1);
    for(let i=1; i<nums.length; i++){
        for(let j=0; j<i; j++){
            if(nums[j]<nums[i] && lis[j]>=lis[i]){
                lis[i] = 1+lis[j];
            }
        }
    }
    
    return lis.reduce((max, val)=>max<val? val : max, -Infinity);
};