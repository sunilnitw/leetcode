/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [];
    const subs = (pos, arr)=>{
        ans.push([...arr]);
        for(let i=pos; i<nums.length; i++){
            subs(i+1, [...arr, nums[i]]);
        }
    }
    subs(0, []);
    return ans
};