/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var arr = s.split(''), hash = {}, i=0, j=0, maxlen = 0;
    while(i<arr.length){
        if(hash.hasOwnProperty(arr[i])){
            j = Math.max(j, hash[arr[i]]+1);
        } 
            hash[arr[i]] = i;
            var l = i-j+1;
            if(maxlen < l){
                maxlen = l;
            }
        
        i++;
    }
    return maxlen;
};
