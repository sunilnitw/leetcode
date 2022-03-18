/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0, j = height.length, sum = 0, left_max = [...height], right_max = [...height];
    for(let i=1; i<j; i++){
        left_max[i] = Math.max(left_max[i], left_max[i-1]);
    }
    for(let i=j-2; i>=0; i--){
        right_max[i] = Math.max(right_max[i], right_max[i+1]);
    }
    // console.log(left_max, right_max)
    for(let i=1; i<j-1; i++){
        sum += Math.min(left_max[i], right_max[i])-height[i];
        // console.log(sum)
    }
    return sum;
};