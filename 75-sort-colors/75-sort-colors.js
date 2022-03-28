/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let z = 0, o = 0, t = nums.length-1;
    const swap = (i,j)=>{
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    while(o<=t){
        if(nums[o] === 2){
            swap(o, t);
            t--;
        } else if(nums[o] === 1){
            o++;
        } else {
            swap(o, z);
            o++;
            z++;
        }
    }
};