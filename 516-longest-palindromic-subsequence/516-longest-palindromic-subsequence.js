/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const hash = {};
    const lps = (l, r)=>{
        if(l === r) return 1;
        const key = `${l}_${r}`;
        if(hash[key]) return hash[key];
        if(s[l]  === s[r]){
            if(l === r-1) return 2;
            return (hash[key] = lps(l+1, r-1)+2);
        } else {
            return (hash[key] = Math.max(lps(l, r-1), lps(l+1, r)))
        }
    }
    return lps(0, s.length-1);
};