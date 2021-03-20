/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    const row = matrix.length;
    if(row === 0)return 0;
    const col = matrix[0].length, tempSum = new Array(row);
    
    function findMaxArea(arr){
        let len = arr.length;
        if(len===1)return arr[0];
        let newArr = [...arr];
        newArr.push(-1);len++;
        let stack = [], maxCount = Number.MIN_SAFE_INTEGER;
        for(let i=0; i<len; i++){
            let j = stack.length-1;
            while(j>=0 && newArr[stack[j]] >= newArr[i]){
                const h = newArr[stack[j]];
                stack.pop();
                j--;
                const otherIndex = j>=0 ? stack[j] : -1;
                maxCount = Math.max(maxCount, h*(i-otherIndex-1));
            }
            stack.push(i);
        }
        return maxCount;
        
    }
    
    for(let i=0;i<row; i++){
        tempSum[i] = +matrix[i][0];
    }
    
    let maxArea = findMaxArea(tempSum);
    for(let i=1; i<col; i++){
        for(let j=0; j<row; j++){
            if(matrix[j][i] == "0"){
                tempSum[j] = 0;
            } else {
                tempSum[j] += parseInt(matrix[j][i]);
            }
        }
        maxArea = Math.max(maxArea, findMaxArea(tempSum));
    }
    return maxArea;
};