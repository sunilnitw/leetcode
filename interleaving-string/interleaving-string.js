/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length !== s3.length)return false;
    let hash = {};
    function isValidInterleave(s1, s2, s3, l1, l2, l3, p1, p2, p3){
        
        if(p3 === l3)return (p1 === l1 && p2 === l2);
        
        let key = p1+"$"+p2+"$"+p3;
        if(hash.hasOwnProperty(key))return hash[key];
        if(p1 === l1){
            return hash[key] = s2[p2] === s3[p3] ? isValidInterleave(s1, s2, s3, l1, l2, l3, p1, p2+1, p3+1) : false;
        }
        
        if(p2 === l2){
            return hash[key] = s1[p1] === s3[p3] ? isValidInterleave(s1, s2, s3, l1, l2, l3, p1+1, p2, p3+1) : false;
        }
        
        let first = false, second = false;
        if(s1[p1] === s3[p3]){
            first = isValidInterleave(s1, s2, s3, l1, l2, l3, p1+1, p2, p3+1);
        }
        if(s2[p2] === s3[p3]){
            second = isValidInterleave(s1, s2, s3, l1, l2, l3, p1, p2+1, p3+1);
        }
        return hash[key] = first || second;
    }
    return isValidInterleave(s1.split(''), s2.split(''), s3.split(''), s1.length, s2.length, s3.length, 0,0,0);
};