/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length === 0 || nums[0]>target || nums[nums.length-1] < target) return [-1,-1];
    let l=0, r = nums.length-1, m;
    while(l<=r){
        m = parseInt((l+r)/2);
        if(nums[m] === target)break;
        if(nums[m]<target){
            l = m+1;
        } else {
            r = m-1;
        }
    }
    if(nums[m] !== target) return [-1, -1];
    let start = 0, end = nums.length-1;
    l = m, r= m;
        // console.log(m)

    while(start<=l){
        m = parseInt((start+l)/2);
        // console.log(start, m, l);
        if(nums[start] === target)break;
        if(nums[m] === target){
            if(m-1>=0 & nums[m-1] === target) {
                l=m-1;
            } else {
                start=m;   
            }
        } else {
            start = m+1;
        }
    }
    while(r<=end){
        m = parseInt((end+r)/2);
        // console.log(r, m, end);
        if(nums[end] === target)break;
        if(nums[m] === target){
            if(m+1<=nums.length-1 & nums[m+1] === target) {
                r=m+1;
            } else {
                end=m;   
            }
        } else {
            end = m-1;
        }
    }
    
    
    return [start,end];
};