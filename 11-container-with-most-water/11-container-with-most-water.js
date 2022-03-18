/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0, i = 0, j = height.length-1;
    while(i<j){
        max = Math.max(max, (j-i)*Math.min(height[i], height[j]));
        if(height[i]<=height[j]){
            i++;
        } else {
            j--
        }
    }
    return max;
};