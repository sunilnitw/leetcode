/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits === "") return [];
    let dict = {2: ["a","b","c"], 3: ["d","e","f"], 4: ["g","h","i"], 5: ["j","k","l"],  6:  ["m","n","o"], 7: ["p","q","r","s"], 8:  ["t", "u", "v"], 9: ["w","x","y", "z"]}, res = [];
    if(dict[digits]) return dict[digits];
    
    const recurse=(pos, str)=>{
        if(digits.length === str.length){ 
            res.push(str);
            return str;
        }
        let arr = dict[digits[pos]];
        for(let i=0; i<arr.length; i++){
            recurse(pos+1, str+arr[i]);
        }
    }
    recurse(0, "");
    return res;
};