/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const hash  = nums.reduce((acc, val)=>{
      acc[val] = true;
      return acc;
  },{});
    // console.log(hash)
    let maxCount = 0, count=0;
    for(let i=0; i<nums.length; i++){
        if(!hash[nums[i]-1]){
            count = 0;
            let from=nums[i], to=nums[i];
            while(hash[to]){to++;  count++;}
            maxCount = Math.max(maxCount, count);
            // console.log(count, maxCount)
        }
        
    }
    return maxCount;
};