/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length-1, m;
    while(l<r){
        m = parseInt((l+r)/2);
        // console.log('---',l, m, r);
        if(nums[m]>nums[m+1])return nums[m+1];
        if(nums[m]>nums[l] && nums[m]>nums[r]){
            l = m;
        } else {
            r = m;
        }
        // console.log('---+++',l, m, r);
    }
    return nums[l];
};