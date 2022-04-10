/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let lis = new Array(nums.length).fill(1), cnt = new Array(nums.length).fill(1), max_len = 0, res = 0;
    
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<i; j++){
            if(nums[i]>nums[j]){
                if(lis[j]+1 === lis[i]) cnt[i] += cnt[j];
                if(lis[j]+1 > lis[i]){
                    lis[i] = 1+lis[j];
                    cnt[i] = cnt[j];
                }
            }
        }
        if(max_len === lis[i]) res += cnt[i];
        else if(max_len<lis[i]){
            max_len = lis[i];
            res = cnt[i];
        }
    }
    return res;
};