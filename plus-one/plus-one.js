/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    for(let i=digits.length-1; i>=0; i--){
        let sum = digits[i]+carry;
        carry = Math.floor(sum/10);
        digits[i] = sum%10;
    }
    if(carry === 1)digits.unshift(carry);
    return digits;
};