/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let hash = {}, ch, newHash = {}, count = 0;
    for(let i=0;i<s.length; i++){
        ch = s.charAt(i);
        if(!hash.hasOwnProperty(ch)){
            hash[ch] = 0;
        }
        hash[ch]++;
    }
    for(let i=0; i<s.length; i++){
        ch = s.charAt(i);
        if(!newHash.hasOwnProperty(ch)){
            newHash[ch] = 0;
        }
        newHash[ch]++;
        hash[ch]--;
        if(hash[ch] == 0){
            delete hash[ch];
        }
        if(Object.keys(hash).length === Object.keys(newHash).length){
            count++;
        }
    }
    return count;
};