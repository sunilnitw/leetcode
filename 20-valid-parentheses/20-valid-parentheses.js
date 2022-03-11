/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [], mapping = {')': '(', '}': '{', ']': '['};
    for(let ch of s){
        if(!mapping[ch]){
            stack.push(ch);
        } else {
            if(mapping[ch] !== stack[stack.length-1]) return false;
            stack.pop();
        }
    }
    return stack.length===0;
};