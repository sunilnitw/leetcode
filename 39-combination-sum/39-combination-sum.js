/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let resp = [];
    const recurse = (arr, t, pos)=>{
        if(t === target) resp.push(arr);
        if(t>=target) return;
        for(let i=pos; i<candidates.length; i++){
            recurse([...arr, candidates[i]], t+candidates[i], i);
        }
    }
    recurse([], 0, 0);
    return resp;
};