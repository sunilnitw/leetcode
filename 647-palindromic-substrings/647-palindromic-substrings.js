/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
    const plen = (l, r)=>{
        if(s[r] !== s[l]) return 0;
        let c = 0;
        while(l>=0 && r<s.length && s[l] === s[r]){
            l--;
            r++;
            c++;
        }
        return c;
    }
    let count = 0;
    for(let i=0; i<s.length; i++){
        count += plen(i, i);
        count += plen(i, i+1);
    }
    return count;
};