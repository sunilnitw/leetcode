/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let arr = [], count = 0;
    for(let i=1;i<=n; i++){
        arr[i-1] = i;
    }
    if(k === 1){
        return arr.join('');
    }
    function nextPermutation(nums){
        let len = nums.length-1, left = len-1, right;
        while(left>=0 && nums[left]>nums[left+1])left--;
        right = left+1;
        while(right<=len && nums[left]<nums[right])right++;
        right--;
        [nums[left], nums[right]] = [nums[right], nums[left]];
        
        left++;
        right = len;
        while(left < right){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    while(k>1){
        // console.log(arr, k);
        nextPermutation(arr);
        k--;
    }
    return arr.join('');
};