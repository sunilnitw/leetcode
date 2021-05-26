/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n <= 0)return false;
    return parseInt(Math.pow(3, 19)%n) === 0 ? true : false;
};