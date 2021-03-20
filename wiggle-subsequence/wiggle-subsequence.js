/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    
    if(nums.length <=1)return nums.length;
    
//     function findMaxWiggle(isUp, pos, nums){
//         let maxCount = 0;
//         for(let i=pos+1; i<nums.length; i++){
//             if((isUp && nums[i]>nums[i-1]) || (!isUp && nums[i]<nums[i-1])){
//                 maxCount = Math.max(maxCount, 1+findMaxWiggle(!isUp, i, nums));
//             }
//         }
//         return maxCount;
//     }
    
//     return 1+Math.max(findMaxWiggle(true, 0, nums), findMaxWiggle(false, 0, nums))
    
    let up=1, down =1;
    for(let i=1; i<nums.length; i++){
        if(nums[i]>nums[i-1]){
            up = down+1;
        } else if(nums[i]<nums[i-1]){
            down = up+1;
        }
    }
    return Math.max(up, down);
};