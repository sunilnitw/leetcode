/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let diff = Infinity, closeSum;
    for(let i=0; i<nums.length-2; i++){
        let j = i+1, k = nums.length-1;
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k];
            if(Math.abs(target-sum)<Math.abs(diff)){
                diff = target-sum;
                closeSum = sum;
            }
            if(sum<target){
                j++;
            } else {
                k--;
            }
        }
    }
    return closeSum;
};