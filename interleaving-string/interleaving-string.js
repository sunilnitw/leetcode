/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if((s1.length + s2.length) !== s3.length)return false;
    let cache = {};
    function compare(i, j, k){
        let key = `${i}_${j}`;
        if(s3.length === k)return true;
        if(cache.hasOwnProperty(key)) return cache[key];
        if(s1.charAt(i) === s3.charAt(k) && s2.charAt(j) === s3.charAt(k)){
            // console.log('both equal',i,j,k);
            return (cache[key] = compare(i+1, j, k+1) || compare(i, j+1, k+1));
        } else if(s1.charAt(i) === s3.charAt(k)){
            // console.log('left equal',i,j,k);
            return (cache[key] = compare(i+1, j, k+1));
        } else if(s2.charAt(j) === s3.charAt(k)){
            // console.log('right equal',i,j,k);
            return (cache[key] = compare(i, j+1, k+1));
        } else {
            return false;
        }
    }
    return compare(0, 0, 0);
};