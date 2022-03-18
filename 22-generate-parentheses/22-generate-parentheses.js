/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let resp = [];
    const generate =(left, right, str)=>{
        if(str.length >= n*2){
            resp.push(str);
        } else {
            if(left<n){
                generate(left+1, right, str+"(");
            }
            if(right<left){
                generate(left, right+1, str+")");
            }
        }
    }
    generate(0, 0, "");
    return resp;
};