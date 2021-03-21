/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let arr = [];
    function generate(nums, i){
       if(i===nums.length){
            arr.push([...nums]);
       }
        for(let j=i; j<nums.length; j++){
            swap(nums, j, i);
            generate(nums, i+1);
            swap(nums, j, i);
        }
    }
    function swap(nums, i, j){
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    generate(nums, 0);
    return arr;
};