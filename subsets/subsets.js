/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let lists = [];
    nums.sort((a,b)=>a-b);
    function generate(list, tempList, start, end){
        list.push([...tempList]);
        for(let i=start; i<end; i++){
            tempList.push(nums[i]);
            generate(list, tempList, i+1, end);
            tempList.pop();
        }
    }
    generate(lists, [], 0, nums.length);
    return lists;
};