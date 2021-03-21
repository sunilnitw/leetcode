/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let arr = [], hash = {}, len = nums.length;
    
    function generate(nums, len){
       if(len === nums.length){
            arr.push([...nums]);
       }
        for(let key in hash){
            if(hash[key] === 0) continue;
            nums.push(key);
            hash[key]--;
            generate(nums, len);
            hash[key]++;
            nums.pop(key)
        }
    }
    
    nums.forEach((ele)=>{
        if(!hash[ele])hash[ele] = 0;
        hash[ele]++;
    });
    
    generate([], len);
    return arr;
};