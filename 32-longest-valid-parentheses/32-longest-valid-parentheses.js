/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxCount = 0, stack = [-1];
    for(let i=0; i<s.length; i++){
        if(s[i] === ')'){
            if(s[stack[stack.length-1]] === '('){
                stack.pop();
            } else {
                stack.push(i);
            }
            maxCount = Math.max(maxCount, i-stack[stack.length-1]);
        } else {
            stack.push(i);
        }
    }
    return maxCount;
};