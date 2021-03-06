/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var ans = [];
    function getCombinationSum(candidates, index, target, temp){
        if(target === 0){
            ans.push([...temp]);
            return;
        }
        if(target < 0){
            return;
        }
        for(let i=index; i<candidates.length; i++){
            temp.push(candidates[i]);
            getCombinationSum(candidates, i, target-candidates[i], temp);
            temp.pop();
        }
    }
    getCombinationSum(candidates, 0, target, []);
    return ans;
};