/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start=0, end = 0;
    function findLength(l, r){
        while(l>=0 && r<s.length && s[l] === s[r]){
            l--; r++;
        }
        return r-l-1;
    }
    
    for(let i=0; i<s.length; i++){
        let len1 = findLength(i, i), len2 = findLength(i, i+1);
        let len = Math.max(len1, len2);
        if(len>(end-start)){
            start = i - parseInt((len-1)/2);
            end = i+parseInt((len)/2);
        }
    }
    
    return s.slice(start, end+1);
};