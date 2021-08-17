/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let start = 0, end = 0, ans=null;
    for(let num of nums){
        if(start<num){
            start = num;
        }
        end += num;
    }
    ans = end;
    while(start<=end){
        let mid = start + parseInt((end-start)/2), sum = 0, count = 1;
        for(let num of nums){
            if(sum+num>mid){
                sum = num;
                count++;
            } else {
                sum+=num;
            }
        }
        if(count<=m){
            ans = Math.min(ans, mid);
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    return ans;
};