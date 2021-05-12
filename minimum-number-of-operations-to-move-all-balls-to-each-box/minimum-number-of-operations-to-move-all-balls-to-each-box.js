/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    var boxArr = boxes.split(''), len = boxes.length, ans = new Array(len).fill(0), ball = 0, sum = 0;
    for(let i=1; i<len; i++){
        if(boxArr[i-1] === '1'){
            ball++;
        }
        sum += ball;
        ans[i] = sum;
    }
    sum =0; ball=0;
    for(let i=len-2; i>=0; i--){
        if(boxArr[i+1] === '1'){
            ball++;
        }
        sum += ball;
        ans[i] += sum;
    }
    return ans;
};