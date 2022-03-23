/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};
    for(let i=0; i<strs.length;  i++){
        const key = strs[i].split('').sort().join('');
        if(!hash[key]) hash[key] = [];
        hash[key].push(strs[i]);
    }
    return Object.values(hash);
};