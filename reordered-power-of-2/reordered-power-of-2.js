/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N) {
    if(isPowerOfTwo(N) === true) return true;
    function isPowerOfTwo(num){
        if(num === 1) return true;
        if(num%2 === 1) return false;
        return isPowerOfTwo(num>>1);
    }
    function covertArrToNum(arr){
        return parseInt(arr.join(''), 10);
    }
    function swap(arr, i, j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    function doPermutaiton(arr, pos){
        if(pos === arr.length){
            return isPowerOfTwo(covertArrToNum(arr));
        }
        for(let i=pos; i<arr.length; i++){
            if(pos ===0 && arr[i] === '0')continue;
            swap(arr, i, pos);
            if(doPermutaiton(arr, pos+1) === true){
                return true;
            }
            swap(arr, i, pos);
        }
        return false;
    }
    const arr = N.toString().split('');
    return doPermutaiton(arr, 0);
};