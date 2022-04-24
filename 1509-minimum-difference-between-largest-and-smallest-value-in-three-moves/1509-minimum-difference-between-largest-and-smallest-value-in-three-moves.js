/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    let len = nums.length, min = Infinity;
    if(len<=4)return 0;
    nums.sort((a,b)=>a-b);
    const findMin = (left, right, count)=>{
        if(count === 3){
            return (min = Math.min(min, nums[right]-nums[left]));
        } 
        findMin(left+1, right, count+1);
        findMin(left, right-1, count+1);
        return 
    }
    findMin(0,len-1, 0);
    return min;
};