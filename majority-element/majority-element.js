/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    for(let i=0; i<nums.length; i++){
        if(obj.hasOwnProperty(nums[i])){
            obj[nums[i]] += 1;
        } else {
            obj[nums[i]] = 1;
        }
    }
    // console.log(obj);
    for(let val in obj){
        if(obj[val] > nums.length/2) return val;
    }
};
