/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  function swap(nums, i, j){
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
  }
    for(let i=0, j=0; i<nums.length;i++){
        if(nums[i] !== 0){
            if(i!==j)
            swap(nums, i, j);
            j++;
        }
    }
};
