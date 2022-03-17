/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let dict = {}, max = 0, prev = 0;
    if(s.length<=1)return s.length;
    for(let i=0; i<s.length; i++){
        const ch = s[i];
        if(dict[ch]>=0){
            prev = Math.max(prev, dict[ch]+1);
        }
        max = Math.max(max, (i-prev)+1);
        dict[ch] = i;
        // console.log(max, prev, dict)
    }
    return max;
};