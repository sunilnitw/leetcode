var deleteNode = function(root, key) {
    var prevEle = null;
    function findEle(root, val){
        if(root === null || root.val === val) return root;
        prevEle = root;
        if(root.val>val) return findEle(root.left, val);
        else return findEle(root.right, val);
    }
    var keyEle = findEle(root, key), mostRightLeft = null;
    if(keyEle === null)return root;
    if(prevEle === null && (keyEle.left === null || keyEle.right === null))return keyEle.left || keyEle.right;
    console.log(keyEle);
    if(keyEle && keyEle.right !== null){
        prevEle = keyEle;
        mostRightLeft = keyEle.right;
        while(mostRightLeft.left != null){
            prevEle = mostRightLeft;
            mostRightLeft=mostRightLeft.left
            // if(mostRightLeft.left === null && mostRightLeft.right !== null){
            //     prevEle = mostRightLeft;
            //     mostRightLeft = mostRightLeft.right;
            // }
        }
        keyEle.val = mostRightLeft.val;
        mostRightLeft.val = key;
        keyEle = mostRightLeft;
    }
        console.log(keyEle, prevEle, key);
        let node = keyEle.left || keyEle.right;
​
//     if(keyEle.left === null && keyEle.right === null){
//         if(prevEle.left && prevEle.left.val === key){
//             prevEle.left = node;
//         } else {
//             prevEle.right = node;
//         }
//     } else {
        
//     }
    if(prevEle.left && prevEle.left.val === key){
        prevEle.left = node;
    } else {
        prevEle.right = node;
    }
    
    // if(keyEle.left === null && keyEle.right === null){
    //     if(prevEle.left.val === key)prevEle.left = null;
    //     else prevEle.right === null;
    // }  else {
    //     prevEle.left = keyEle
    // }
