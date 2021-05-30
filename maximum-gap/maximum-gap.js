/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length<2) return 0;
    let min = Infinity, max = -Infinity;
    for(let val of nums){
        min = Math.min(min, val);
        max = Math.max(max, val);
    }
    if(min === max) return 0;
    
    let interval = Math.ceil((max-min)/(nums.length-1)), minMax = {};
    
    for(let i=0; i<nums.length; i++){
        let ind = parseInt((nums[i]-min)/interval);
        // console.log(ind, interval, i)
        if(!minMax[ind]){
            minMax[ind] = {min:nums[i] , max: nums[i]};
        } else {
            minMax[ind].min = Math.min(minMax[ind].min, nums[i]);
            minMax[ind].max = Math.max(minMax[ind].max, nums[i]);
        }
    }
    
    let keys = Object.keys(minMax), res = -Infinity;
    for(let i=1; i<keys.length; i++){
        res = Math.max(res, minMax[keys[i]].min - minMax[keys[i-1]].max);
    }
    
    // console.log(minMax, res);
    return res;
};