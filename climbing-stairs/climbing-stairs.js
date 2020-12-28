/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev = 1, next = 1, i = 1;
    while(i<n){
        let temp = next;
        next += prev;
        prev = temp;
        i++;
    }
    return next;
};
