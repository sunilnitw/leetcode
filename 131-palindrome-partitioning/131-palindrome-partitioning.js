/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let resp = [], hash = {};
    const isPalindrome = (i,j)=>{
        while(i<=j && s[i] === s[j]){i++; j--;}
        return i>=j ? true : false;
    }
    const doPartition = (pos, prev)=>{
        if(pos >= s.length)
            resp.push([...prev]);
        // if(hash[pos]) return hash[pos];
        let j = pos, arr = [];
        for(let j=pos; j<s.length; j++){
            if(isPalindrome(pos, j)){
                let temp = s.slice(pos, j+1);
                // console.log(pos, j, prev, temp)
                doPartition(j+1, [...prev, temp])
                // arr.push(temp)
            }
        }
        // console.log(arr);
        // return arr;
        // for(let i=pos; i<s.length; i++){
        //     if(isPalindrome(pos, i)){
        //         let res = doPartition(i+1, [...prev, ...s.slice(pos, pos+i).split('')]);
        //         // hash[i] = res;
        //     }
        // }
    }
    doPartition(0, []);
    return resp;
};