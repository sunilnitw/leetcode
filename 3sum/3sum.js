/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort();
    // console.log(nums);
    let i = 0, l = nums.length, ans = [], zero = 0;
    if(l <3 || nums[0]>0) return [];
    while(i<l-2 && nums[i] < 0){
        
        let j = i+1, hash = {};
        // console.log('i: ',i, j);
        while(j<l){
            if(hash.hasOwnProperty(nums[j])){
                ans.push([nums[i], hash[nums[j]], nums[j]]);
                while(j<l-1 && nums[j] === nums[j+1])j++;
            } else {
                hash[-nums[i]-nums[j]] = nums[j];
            }
            // console.log(j,hash)
            j++;
        }
        // console.log(ans);
        i++;
        while(i<l-1 && nums[i] === nums[i-1])i++;
    }
    while(i<l && nums[i] === 0){
        zero++;i++;
    }
    if(zero>2){
        ans.push([0, 0, 0]);
    }
    return ans;
};