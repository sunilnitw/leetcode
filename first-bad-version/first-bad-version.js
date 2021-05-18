/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l=1, h=n, m;
        while(l<h){
            m = parseInt((l+h)/2);
            if(isBadVersion(m) === true){
                h = m;
            } else {
                l = m+1;
            }
        }
        return l;
    };
};