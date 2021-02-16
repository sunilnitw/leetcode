/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows <= 1) return s;
    let str = "", cycleLen = numRows*2-2, strArr = s.split('');
    for(let i=0; i<numRows;i++){
        for(let j=0; j+i<strArr.length; j+= cycleLen){
            str += strArr[i+j];
            if(i != 0 && i!=numRows-1 && j+cycleLen-i<strArr.length){
                str += strArr[j+cycleLen-i];
            }
        }
    }
    return str;
};