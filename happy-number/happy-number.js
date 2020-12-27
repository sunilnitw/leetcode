/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n == 1 || n ==7) return true;
    if(n<10) return false;
    let newN = 0;
    while(n>0){
        newN += ((n%10) * (n%10));
        n = parseInt(n/10);
    }
    // console.log(newN);
    return isHappy(newN);
};
