/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let len = nums.length;
    const parent = i=>Math.floor(i/2);
    const left = i=>2*i+1;
    const right = i=>2*i+2;
    const heapify = (pos, length)=>{
        let l = left(pos), r = right(pos),p = pos;
        if(length>l && nums[l]>nums[p])p=l;
        if(length>r && nums[r]>nums[p])p=r;
        if(p!==pos){
            [nums[p], nums[pos]] = [nums[pos], nums[p]];
            heapify(p, length);
        }
    }
    
    for(let i=Math.floor((len-1)/2);i>=0; i--)heapify(i, len);
    
    while(k>0){
        [nums[0], nums[len-1]] = [nums[len-1], nums[0]];
        len--;
        heapify(0, len);
        k--;
    }
    
    return nums[len];
    
};