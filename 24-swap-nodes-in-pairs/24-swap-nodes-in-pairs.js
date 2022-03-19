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
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let newHead = head.next, prev = null;
    while(head && head.next){
        let temp = head.next, next = head.next.next;
        if(prev){
            prev.next = temp;
        }
        head.next = next;
        temp.next = head;
        prev = head;
        head = next;
    }
    return newHead;
};