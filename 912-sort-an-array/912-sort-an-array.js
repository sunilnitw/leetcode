/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // return quickSort(nums);
    return mergeSort(nums);
};

const mergeSort = (nums)=>{
    const merge = (l, m, r)=>{
        let arr = new Array(r-l+1), i = l, j = m+1, k =0;
        while(i<=m && j<=r){
            if(nums[i]>=nums[j]) arr[k]=nums[j++];
            else arr[k]=nums[i++];
            k++;
        }
        while(i<=m)arr[k++]=nums[i++];
        while(j<=r)arr[k++]=nums[j++];

        for(let i=0, j = l; i<(r-l+1);i++, j++){
            nums[j] = arr[i];
        }
    }
    const divide = (l, r)=>{
        if(l<r){
            let m = l+Math.floor((r-l)/2);
            divide(l,m);
            divide(m+1, r);
            merge(l,m,r);
        }
    }
    divide(0, nums.length-1);
    return nums;
}

const quickSort = (nums)=>{
    const partition = (l, r)=>{
        let i=l, j = r;
        while(i<j){
            while(i<r && nums[l]>=nums[i])i++;
            while(j>l && nums[l]<=nums[j])j--;
            if(i<j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
        [nums[l], nums[j]] = [nums[j], nums[l]];
        return j;
    }
    const quick = (l, r)=>{
        if(l<r){
            let piv = partition(l,r);
            quick(l, piv);
            quick(piv+1, r);
        }
    }
    quick(0, nums.length-1);
    return nums;
}