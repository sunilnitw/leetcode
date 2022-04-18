/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let num = 0, result = 0, sign = 1, stack = []
    s.split('').forEach((ch)=>{
        if(ch>='0' && ch<='9'){
            num = num*10 + parseInt(ch);
        } else if(ch === '+'){
            result += (num*sign);
            num = 0;
            sign = 1;
        } else if(ch === "-"){
            result += (num*sign);
            num = 0;
            sign = -1;
        } else if(ch === '('){
            stack.push(result);
            stack.push(sign);
            sign = 1;
            result = 0;
        } else if(ch === ')'){
            let sg = stack.pop(), rs = stack.pop();
            result += num*sign;
            result *= sg;
            result += rs;
            num=0;
        }
        // console.log(num, result, ch, sign)
    });
    if(num!==0){
        result += num*sign;
    }
    return result;
};