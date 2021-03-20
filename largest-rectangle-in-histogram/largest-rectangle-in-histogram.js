/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0);
    let stack = [], len = heights.length, maxSum = Number.MIN_SAFE_INTEGER;
    
    for(let i=0;i<len;i++){
        let j = stack.length-1;
        while(j >= 0 && heights[stack[j]]>=heights[i]){
            let h = heights[stack[j]];
            stack.pop(); 
            j--;
            let otherIndex = j>=0 ? stack[j] : -1;
            // console.log(i, otherIndex, h, maxSum);
            maxSum = Math.max(maxSum, h*(i-otherIndex-1));
        }
        stack.push(i);
    }

    return maxSum;
};

