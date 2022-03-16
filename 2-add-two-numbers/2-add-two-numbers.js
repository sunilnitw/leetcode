/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let rl1 = l1, rl2  = l2, head = new ListNode(), carry = 0, root = head;
    while(rl1 && rl2){
        const sum = carry+ rl1.val + rl2.val;
        carry = parseInt(sum/10);
        head.next = new ListNode(sum%10);
        head = head.next;
        rl1 = rl1.next;
        rl2 = rl2.next;
        
    }
    while(rl1){
        const sum = carry+ rl1.val;
        carry = parseInt(sum/10);
        head.next = new ListNode(sum%10);
        head = head.next;
        rl1 = rl1.next;
    }
    while(rl2){
        const sum = carry + rl2.val;
        carry = parseInt(sum/10);
        head.next = new ListNode(sum%10);
        head = head.next;
        rl2 = rl2.next;
    }
    if(carry){
       head.next = new ListNode(carry);
    }
    return root.next;
};