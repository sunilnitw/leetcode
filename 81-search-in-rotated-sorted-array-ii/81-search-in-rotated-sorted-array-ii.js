/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let l=0, r = nums.length-1, m;
    while(l<=r){
        m = parseInt((l+r)/2);
        if(nums[m] === target || nums[l]===target || nums[r] === target) return true;
        // console.log(l,m,r)
        if(nums[l]<nums[m] && target>=nums[l] && target<=nums[m]){
            r = m-1;
        } else if(nums[m]<nums[r] && target>=nums[m] && target<=nums[r]) {
            l = m+1;
        } else {
            l++;
        }
    }
    return false;
};