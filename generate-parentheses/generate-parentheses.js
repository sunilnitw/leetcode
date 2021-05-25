/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let output = [];
    function generate(exp, left, right){
        if(exp.length === n*2){
            output.push(exp);
            return;
        }
        if(left<n){
            generate(exp+"(", left+1, right);
        }
        if(right<left){
            generate(exp+")", left, right+1);
        }
    }
    generate("", 0, 0);
    return output;
};