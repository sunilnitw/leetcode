/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  
    // function lcs(arr1, arr2, l1, l2){
    //     if(l1 < 0 || l2 < 0)return 0;
    //     if(arr1[l1] == arr2[l2])return 1+lcs(arr1, arr2, l1-1, l2-1);
    //     else return Math.max(lcs(arr1, arr2, l1-1, l2), lcs(arr1, arr2, l1, l2-1));
    // }
    // let lcsCount = lcs(text1.split(""), text2.split(""), text1.length-1, text2.length-1);
    
    let arr1 = text1.split(""), arr2 = text2.split(""), l1 = arr1.length, l2 = arr2.length;
    let ref = [];
    for(let i=0; i<=l2; i++)ref.push(new Array(l1+1));
    for(let i=0; i<=l1; i++)ref[0][i] = 0;
    for(let i=0; i<=l2; i++)ref[i][0] = 0;
    for(let i=1; i<=l2; i++){
        for(let j=1; j<=l1; j++){
            if(arr2[i-1] == arr1[j-1]){
                ref[i][j] = ref[i-1][j-1]+1;
            } else {
                ref[i][j] = Math.max(ref[i-1][j], ref[i][j-1]);
            }
        }
    }
    return ref[l2][l1];
};
