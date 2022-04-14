/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const sum = nums.reduce((acc, val)=>acc+val,0);
    if(sum%k !== 0) return false;
    
    let visited = new Array(nums.length).fill(false);
    
    const canPartition = (pos, curr_sum, target, k)=>{
        
        if(k === 1) return true;
        if(curr_sum === target){
            return canPartition(0, 0, target, k-1);
        }
        if(curr_sum>target) return false;
        for(let i=pos; i<nums.length; i++){
            if(!visited[i]){
                visited[i] = true;
                if(canPartition(i+1, curr_sum+nums[i], target, k))
                    return true;
                visited[i] = false;
            }
        }
        return false;
    };
    
    return canPartition(0, 0, sum/k, k)
};