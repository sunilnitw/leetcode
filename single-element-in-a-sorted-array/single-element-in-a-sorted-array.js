/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let r = nums.length, l = 0;
    if(r === 1) return nums[0];
    
    while((r-l)>1){
        let m = l + parseInt((r-l)/2);
        if(nums[m] === nums[m+1]){
            if((r-m)%2 === 1){
                l = m-1;
            } else {
                r = m;
            }
        } else {
            if((r-m)%2 === 1){
                r = m+1;
            } else {
                l = m+1;
            }
        }
        // console.log(l,m,r);
    }
    return nums[l];
};

// [1,1,3,3,4,4,8,8,9]  [0,1,1,2,2,4,4,8,8] [2,1,1] [1,1,2]

/*
equal => 
distinct => 
l = 0
m = 3
r = 7
*/