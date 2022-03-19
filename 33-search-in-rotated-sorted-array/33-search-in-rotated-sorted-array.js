/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0, r = nums.length-1, m;
    while(l<=r){
        m = parseInt((l+r)/2);
        if(nums[m] === target) return m;
        if(nums[l] === target) return l;
        if(nums[r] === target) return r;
        // console.log(l,m,r)
        if(nums[l]<nums[m]){
            if(target>nums[l] && target<nums[m]){
                r = m-1;
            } else {
                l = m+1;
            }
        } else {
            if(target>nums[m] && target<nums[r]){
                l = m+1;
            } else {
                r = m-1;
            }
        }
    }
    return -1;
};