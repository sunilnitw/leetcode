/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    return iterative(nums);
};
const iterative = (nums)=>{
    let ans = [], len = nums.length;
    for(let i=1; i<=1<<len; i++){
        let temp = [];
        for(let j=0; j<len; j++){
            if(i&(1<<j)){
                temp.push(nums[j]);
            }
        }
        ans.push(temp);
    }
    return ans;
}
const recursive = (nums)=>{
    const ans = [];
    const subs = (pos, arr)=>{
        ans.push([...arr]);
        for(let i=pos; i<nums.length; i++){
            subs(i+1, [...arr, nums[i]]);
        }
    }
    subs(0, []);
    return ans;
}