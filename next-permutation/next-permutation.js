/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length === 1)return;
    let len = nums.length-1, leftEnding=nums.length-2, rightEnding;
    
    function reverse(l, r){
        while(l<r){
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
    
    while(leftEnding>=0 && nums[leftEnding]>=nums[leftEnding+1]){
        leftEnding--;
    }
    
    if(leftEnding < 0){
        reverse(0, len);
    } else {
        rightEnding=leftEnding+1;
        while(rightEnding<=len && nums[leftEnding]<nums[rightEnding]){
            rightEnding++;
        }
        rightEnding--;
        [nums[leftEnding], nums[rightEnding]] = [nums[rightEnding], nums[leftEnding]];
        reverse(leftEnding+1, len);
        // console.log(leftEnding, rightEnding);
    }
};