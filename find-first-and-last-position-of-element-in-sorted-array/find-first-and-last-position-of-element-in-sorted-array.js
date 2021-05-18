/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0, h = nums.length-1, m;
    while(l<=h){
        m = parseInt((l+h) / 2);
        if(nums[m]<target){
            l=m+1;
        } else if(nums[m]>target){
            h=m-1;
        } else {
            if(nums[l]===target && nums[h] === target){
                return [l, h];
            } else if(nums[l] === target){
                h--;
            } else {
                l++;
            }
        }
        // console.log(l,m,h);
    }
    return [-1, -1];
};