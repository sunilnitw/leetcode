            swap(arr, min, i);
            minify(arr, min, length);
        }
    }
    function findKthSmallest(arr, k){
        var n = arr.length, heap = [];
        for(let i=0; i<n; i++){
            heap[i] = new HeapNode(arr[0][i], 0, i);
        }
        minify(heap, 0, n);
        var hr = new HeapNode(0,0,0);
        for(let i=0; i<k; i++){
            hr = heap[0];
            let nextVal = hr.r<n-1 ? arr[hr.r+1][hr.c] : Number.MAX_SAFE_INTEGER;
            heap[0] = new HeapNode(nextVal, hr.r+1, hr.c);
            minify(heap, 0, n);
        }
        return hr.val;
    }
    return findKthSmallest(matrix, k);
    // var i=0, i1=0, j=0, j1=0, count = 0, n = matrix.length;
    // while(i<n && j<n){
    //     if(i<n && j<n){
    //         let num = matrix[j][j1], a=matrix[j][j1], b=matrix[i1][i];
    //         if(matrix[i1][i] >= matrix[j][j1]){
    //             if(i === j1 && i1 === j)i1++;
    //             j1++;
    //         } else {
    //             num = matrix[i1][i];
    //             i1++;
