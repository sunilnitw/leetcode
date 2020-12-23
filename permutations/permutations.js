var perm = [];
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    perm = [];
    generatePermutation(nums, [], 0);
    return perm;
};
​
var generatePermutation = function(nums, arr, pos){
    if(pos == nums.length){
        perm.push(JSON.parse(JSON.stringify(arr)));
    }
    for(let i=pos; i<nums.length; i++){
        arr[pos] = nums[i];
        swap(nums, i, pos);
        generatePermutation(nums, arr, pos+1)
        swap(nums, i, pos);
    }
}
​
var swap = function(nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
