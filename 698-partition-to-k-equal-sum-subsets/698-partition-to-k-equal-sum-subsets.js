/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const sum = nums.reduce((a, b)=>a+b, 0);
    if(sum%k === 1 || nums.length < k) return false;
    nums.sort((a,b)=>a-b);
    let len = nums.length, target = sum/k, right = len-1;
    if(nums[len-1]>target)return false;
    while(right>=0 && nums[right] === target){
        k--;
        right--;
    }
    const partition = new Array(k).fill(0), isPartition = false;
    
    function doPartition(partition, right, nums, target){
        if(right<0)return true;
        let tempV = nums[right--];
        for(let i=0; i<k; i++){
            if(partition[i]+tempV <= target){
                partition[i]+=tempV;
                if(doPartition(partition, right, nums, target)) return true;
                partition[i]-=tempV;
            }
            if(partition[i] === 0)break;
        }
        return false;
    }
    return doPartition(partition, right, nums, target);
};
/*
1,2,2,3,3,4,5
*/