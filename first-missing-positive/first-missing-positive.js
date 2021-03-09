/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    function partition(nums){
        let k=-1;
        for(let i=0;i<nums.length; i++){
            if(nums[i]>0){
                k++;
                if(i!==k){
                    [nums[i], nums[k]] = [nums[k], nums[i]]
                }
            }
        }
        return k;
    }
    let p = partition(nums)+1, max_partition = p;
    // console.log(p, nums);
    for(let i=0; i<p; i++){
        let val = Math.abs(nums[i]);
        if(val<=p){
            nums[val-1] = nums[val-1] < 0 ?  nums[val-1] : -nums[val-1]
        }
    }
    for(let i=0;i<p; i++){
        if(nums[i]>0){
            max_partition = i;
            break;
        }
    }
    return max_partition+1;
};