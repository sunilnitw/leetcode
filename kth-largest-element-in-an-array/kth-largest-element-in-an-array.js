/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    function swap(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    function maxify(arr, i, length){
        let l = i*2+1, r = i*2+2, min = i;
        if(l<length && arr[min]<arr[l]){
            min = l;
        }
        if(r<length && arr[min]<arr[r]){
            min = r;
        }
        if(min != i){
            swap(arr, min, i);
            maxify(arr, min, length);
        }
    }
    function kthLargest(arr, k){
        let kth = arr[0], length = arr.length;
        for(let i=Math.floor(length/2)-1;i>=0; i--){
            maxify(arr, i, length);
        }
        for(let i=0; i<k; i++){
            swap(arr, 0, length-i-1);
            maxify(arr, 0, length-i-1);
        }
        return arr[length-k];
    }
    return kthLargest(nums, k);
    // nums.sort((a, b)=> Number(a)-Number(b));
