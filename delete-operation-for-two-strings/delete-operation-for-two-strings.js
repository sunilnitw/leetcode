/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let hash = {};
    function lcsCount(word1, word2){
        if(word1 === word2) return 0;
        if(!word1 || !word2){
            return word1.length || word2.length;
        }
        const key = word1+"$"+word2;
        if(hash[key])return hash[key];
        
        if(word1.charAt(0) === word2.charAt(0)){
            let res = lcsCount(word1.substring(1), word2.substring(1));
            hash[key] = res;
            return res;
        }
        let res = 1+Math.min(lcsCount(word1.substring(1), word2), lcsCount(word1, word2.substring(1)));
        hash[key] = res;
        return res;
    }
    return lcsCount(word1, word2);
};