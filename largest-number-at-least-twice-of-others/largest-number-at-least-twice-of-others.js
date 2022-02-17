/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = -Infinity, index;
    nums.forEach((num, i)=>{
        if(max !== Math.max(max, num)){
            max = Math.max(max, num);
            index = i;
        }
    })
    const half = max/2;
    return nums.some((num)=>half<num && num !== max) ? -1 : index;  
};