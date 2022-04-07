/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head || !head.next) return null;
    let slow = head, fast = head;
    while(fast){
        slow = slow.next;
        fast = fast.next;
        if(fast){
            fast = fast.next;
        }
        if(slow === fast)break;
    }
    if(!fast) return null;
    slow = head;
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};