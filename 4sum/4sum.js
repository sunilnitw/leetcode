/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function(a, b){
        return a-b;
    });
    // console.log(nums)
    let i = 0, l = nums.length, ans = [], zero = 0;
    if(l <4) return [];
    
    while(i<l-3){
        let k = i+1, target1 = target - nums[i];
        while(k<l-2){
            let j = k+1, hash = {}, target2 = target1 - nums[k];
            
            // console.log('i: ',i, j, k, target, target1);
            while(j<l){
                if(hash.hasOwnProperty(nums[j])){
                    ans.push([nums[i], nums[k], hash[nums[j]], nums[j]]);
                    while(j<l-1 && nums[j] === nums[j+1])j++;
                } else {
                    hash[target2-nums[j]] = nums[j];
                }
                // console.log(i,j,k,hash)
                j++;
            }
            // console.log(ans);
            while(k<l-1 && nums[k] === nums[k+1])k++;
            k++;
        }
        while(i<l-1 && nums[i] === nums[i+1])i++;
        i++;
    }
    return ans;
};