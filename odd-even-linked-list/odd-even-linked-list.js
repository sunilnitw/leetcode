/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head === null || head.next ===null){
        return head;
    }
    var odd = head, even = head.next, newHead = head, count = 1, secondNode = head.next;
    head = head.next.next;
    while(head != null){
        if(count%2 === 1){
            odd.next = head;
            odd = head;
        } else {
            even.next = head;
            even = head;
        }
        head = head.next;
        count++;
    }
    even.next = null;
    odd.next = secondNode;
    return newHead;
};
