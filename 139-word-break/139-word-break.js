/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const trie = {}, cache = {};
    const construct = (word)=>{
        let prev = "", tempTrie = trie;
        for(let i=0; i<word.length;  i++){
            prev = word[i]
            if(!tempTrie[prev]){
                tempTrie[prev] = {};
            }
            tempTrie = tempTrie[prev];
        }
        tempTrie.isEnd = true;
    }
    
    wordDict.forEach((val)=>construct(val));
    
    const find = (pos)=>{
        
        if(pos>=s.length) return true;
        if(cache.hasOwnProperty(pos)) return cache[pos];
        let tempTrie = trie, ch;
        for(let i=pos; i<s.length; i++){
            ch = s[i];
            if(tempTrie[ch]){
                if(tempTrie[ch].isEnd){
                    cache[i+1] = find(i+1);
                    if(cache[i+1]){
                        return true;
                    }
                }
                tempTrie = tempTrie[ch];
            } else {
                return false;
            }
        }
        return false;
    }
    
    return find(0);
};