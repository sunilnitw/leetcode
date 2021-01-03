/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
​
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    function length(head){
        let count = 0;
        while(head != null){
            count++;
            head = head.next;
        }
        return count;
    }
    let l1 = length(headA), l2 = length(headB);
    while(l1>l2){
        l1--;
        headA = headA.next;
    }
    while(l1<l2){
        l2--;
        headB = headB.next;
    }
    while(headB != null){
        if(headB == headA)return headB;
        headB = headB.next;
        headA = headA.next;
    }
    return null;
};
