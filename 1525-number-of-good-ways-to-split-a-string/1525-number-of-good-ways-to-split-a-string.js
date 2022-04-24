/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let len = s.length, left = new Array(len), right = new Array(len), cache = {}, count = 0;
    
    for(let i=0; i<len; i++){
        if(!cache[s[i]]){
            count++;
            cache[s[i]] = true;
        }
        left[i]=count;
    }
    count = 0;
    cache = {};
    for(let i=len-1; i>=0; i--){
        if(!cache[s[i]]){
            count++;
            cache[s[i]] = true;
        }
        right[i]=count;
    }
    // console.log(left, right)
    count = 0
    for(let i=0; i<len-1; i++){
        if(left[i] === right[i+1]){
            count++;
        }
    }
    return count;
};