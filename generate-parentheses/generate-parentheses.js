/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var output = [];
    function generate(arr, curr, left, right, n){
        if(curr.length == 2*n){
            output.push(curr);
            return;
        }
        if(left<n){
            generate(arr, (curr+"("), left+1, right, n);
        } 
        if(right<left) {
            generate(arr, (curr+")"), left, right+1, n);
        }
    }
    generate([], "", 0, 0, n);
    return output;
};
