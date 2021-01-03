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
var reverseList = function(head) {
    function iteratively(head){
        var head1 = head, prev = null;
        while(head1 != null){
            let temp = head1.next;
            head1.next = prev;
            prev = head1;
            head1 = temp
        }
        return prev;
    }
    return iteratively(head);
};
