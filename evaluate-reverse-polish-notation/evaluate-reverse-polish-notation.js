/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [], opt = {"+":"+", "-":"-", "/":"/","*":"*"};
    for(let i=0; i< tokens.length; i++){
        if(opt[tokens[i]]){
            let b = stack.pop(), a = stack.pop(), res = 0;
            switch(tokens[i]){
                case "+": res = a+b; break;
                case "-": res = a-b; break;
                case "/": res = parseInt(a/b); break;
                case "*": res = a*b; break;
            }
            stack.push(res);
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack.pop();
};