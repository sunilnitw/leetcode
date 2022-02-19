/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const partition = (l, r)=>{
        let i=l, j = r;
        while(i<j){
            while(i<r && nums[l]>=nums[i])i++;
            while(j>l && nums[l]<=nums[j])j--;
            if(i<j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
        [nums[l], nums[j]] = [nums[j], nums[l]];
        return j;
    }
    const quick = (l, r)=>{
        if(l<r){
            let piv = partition(l,r);
            quick(l, piv);
            quick(piv+1, r);
        }
    }
    quick(0, nums.length-1);
    return nums;
};