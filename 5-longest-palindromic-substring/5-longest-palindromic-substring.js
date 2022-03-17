/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length<=1) return s;
    const findPalindrome = (left, right)=>{
        if(s[left]  !== s[right])  return "";
        while(left>=0 && right<s.length  && s[left]  === s[right]){
            left--;
            right++;
        }
        return s.substr(left+1, right-left-1);
    };
    let str = "";
    for(let i=0; i<s.length;  i++){
        const s1 = findPalindrome(i, i), s2 = findPalindrome(i, i+1);
        if(str.length<s1.length){
            str = s1;
        }
        if(str.length<s2.length){
            str = s2;
        }
    }
    return str;
};