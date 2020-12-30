/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length-1, sum; 
    while(l<r){
        sum = numbers[l]+numbers[r];
        if(sum === target)break;
        if(sum > target)r--;
        else l++;
    }
    return [l+1, r+1];
};
