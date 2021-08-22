/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let start = weights[0], sum = 0, minCapacity = Infinity;
    for(let w of weights){
        if(start<w){
            start = w;
        }
        sum+=w;
    }
    start = Math.max(start, parseInt(sum/days));
    function isValid(value){
        let count = 1, tempSum = 0;
        for(let w of weights){
            if((tempSum+w)<=value){
                tempSum+=w;
            } else {
                count++;
                tempSum = w;
            }
        }
        return count<=days;
    }
    while(start<=sum){
        let mid = start+parseInt((sum-start)/2);
        if(isValid(mid)){
            minCapacity = Math.min(minCapacity, mid);
            sum = mid-1;
        } else {
            start = mid+1;
        }
    }
    return minCapacity;
};