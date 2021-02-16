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
    if(!l1 || !l2)return ll1 || ll2;
    let newHead, newHeadTemp, list, carry = 0;
    while(l1 && l2){
        let sum = l1.val + l2.val + carry;
        let node = new ListNode(sum%10);
        if(!newHead){
            newHead = node;
        } else {
            newHeadTemp.next = node;
        }
        // console.log(node, sum, carry);
        carry = parseInt(sum/10);
        newHeadTemp = node;
        l1 = l1.next;
        l2 = l2.next;
    }
    while(l1){
        let sum = l1.val + carry;
        let node = new ListNode(sum%10);
        carry = parseInt(sum/10);
        l1 = l1.next;
        newHeadTemp.next = node;
        newHeadTemp = node;
    }
    while(l2){
        let sum = l2.val + carry;
        let node = new ListNode(sum%10);
        carry = parseInt(sum/10);
        l2 = l2.next;
        newHeadTemp.next = node;
        newHeadTemp = node;
    }
    if(carry>0){
        let node = new ListNode(carry%10);
        newHeadTemp.next = node;
    }
    return newHead;
};