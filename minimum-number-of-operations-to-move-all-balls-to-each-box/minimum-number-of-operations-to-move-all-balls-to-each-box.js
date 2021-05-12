/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    var ans = [], boxArr = boxes.split(''), len = boxes.length;
    for(let i=0; i<len; i++){
        let move = 0
        for(let j=0; j<len; j++){
            if(boxArr[j] === '1'){
                move += Math.abs(j-i);
            }
        }
        ans.push(move);
    }
    return ans;
};