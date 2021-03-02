/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let trieHash = {}, hash = {};
    function createTrie(words){
        let arr = words.split(''), tempTrie = trieHash, lastChar = arr[0];
        arr.forEach((ch, i, arr)=>{
            if(!tempTrie.hasOwnProperty(ch)){
                tempTrie[ch] = {isLastNode: false};
            }
            if(i === arr.length-1){
                tempTrie[ch] = {...tempTrie[ch], isLastNode: true};
            }
            tempTrie = tempTrie[ch];
        })
    }
    function createTrieFromDict(arr){
        arr.forEach((str)=>{
            createTrie(str);
        });
    }
    function isWrodBreak(sArr, i){
        if(i>=sArr.length)return true;
        if(!trieHash.hasOwnProperty(sArr[i])){
            return false;
		}
        if(hash.hasOwnProperty(i))return hash[i];
		let tempHash = trieHash;
		for(let j=i; j<sArr.length; j++){
			if(tempHash[sArr[j]]){
				if(tempHash[sArr[j]]['isLastNode']){
                    hash[j+1] =  isWrodBreak(sArr, j+1);
                    if(hash[j+1]) return true;
				}
				tempHash = tempHash[sArr[j]];
			}else{
				return false;
			}
		}
		
        return false;
    }
	createTrieFromDict(wordDict);
    return isWrodBreak(s.split(''), 0);
};