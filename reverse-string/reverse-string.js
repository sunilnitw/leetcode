/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let l = s.length-1, i = 0;
    while(i<l/2){
        let temp = s[i];
        s[i] = s[l-i];
        s[l-i] = temp;
        i++;
    }
};
