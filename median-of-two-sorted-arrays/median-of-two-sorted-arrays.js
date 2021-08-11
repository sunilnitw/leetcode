/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    function findMedian(nums1, nums2){
        let m = nums1.length, n = nums2.length, start = 0, end = m, partitionX = parseInt((start+end)/2), partitionY = parseInt((m+n+1)/2)-partitionX;
        let maxLeftX = nums1[partitionX-1] || -Infinity;
        let minRightX = nums1[partitionX] || Infinity;
        let maxLeftY = nums2[partitionY-1] || -Infinity;
        let minRightY = nums2[partitionY] || Infinity;
        while(start<=end){
            partitionX = parseInt((start+end)/2), partitionY = parseInt((m+n+1)/2)-partitionX;
            maxLeftX = nums1[partitionX-1] || -Infinity;
            minRightX = nums1[partitionX] || Infinity;
            maxLeftY = nums2[partitionY-1] || -Infinity;
            minRightY = nums2[partitionY] || Infinity;
            
            if(maxLeftX <= minRightY && minRightX>= maxLeftY){
                break
            } else if(maxLeftX>minRightY){
                end = partitionX-1;
            } else {
                start = partitionX+1;
            }
        }
        let mx = Math.max(maxLeftX, maxLeftY);
        let mn = Math.min(minRightX, minRightY);
        mx = mx === -Infinity || mx === Infinity ? 0 : mx;
        mn = mn === Infinity || mn === -Infinity ? 0 : mn;
        if((m+n)%2 === 0){
            return parseFloat((mn+mx)/2);
        }
        return parseFloat(mx);
    }
    
    if(nums1.length>nums2.length)
        return findMedian(nums2, nums1);
    return findMedian(nums1, nums2);
};