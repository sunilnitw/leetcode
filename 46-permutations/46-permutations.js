/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [], ps = [...nums];
    const p = (pos, ps)=>{
        if(pos === nums.length-1){
            ans.push([...ps]);
            return;
        }
        for(let i=pos; i<nums.length; i++){
            [ps[pos], ps[i]] = [ps[i], ps[pos]];
            p(pos+1, ps);
            [ps[pos], ps[i]] = [ps[i], ps[pos]];
        }
    };
    p(0, ps);
    return ans;
};