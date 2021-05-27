/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(nums.length <1) return false;
    let sortedArr = [];
    
    for(let i=0; i<nums.length; i++){
        sortedArr.push({value: nums[i], pos: i});
    }
    
    sortedArr.sort((a,b)=>{
        if(a.value != b.value) return a.value-b.value;
        return a.pos-b.pos;
    });
    
    console.log(sortedArr)
    
    for(let i=1; i<nums.length; i++){
        for(let j=i-1; j>=0; j--){
            // console.log(Math.abs(sortedArr[i].value-sortedArr[j].value), sortedArr[i], sortedArr[j])
            if(Math.abs(sortedArr[i].value-sortedArr[j].value)<=t){
                // console.log('...')
                if(Math.abs(sortedArr[i].pos-sortedArr[j].pos)<=k)return true;
            } else {
                break;
            }
        }
    }
    
    return false;
};