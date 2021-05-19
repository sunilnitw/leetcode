/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    
    if(!head || !head.next)return head;
    let mid = getMidEle(head);
    // console.log(head, mid);
    let left = sortList(head);
    let right = sortList(mid);
    // console.log(right)
    return merge(left, right);
};

function getMidEle(head){
    let slow=head, fast = head, prev=null;
    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    return slow;
}

function merge(left, right){
    // console.log('merge: ',left, right);
    let dummy=new ListNode(), tail = dummy;
    while(left && right){
        if(left.val < right.val){
            tail.next = left;
            left = left.next;
        } else {
            tail.next = right;
            right = right.next;
        }
        tail = tail.next;
    }
    // console.log('dummy1: ',dummy, left, right)
    tail.next = left ? left : right;
    // console.log('dummy: ',dummy.next)
    return dummy.next;
}