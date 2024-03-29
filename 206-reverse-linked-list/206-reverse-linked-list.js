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
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let nextEle = head.next;
    head.next = null;
    let temp = reverseList(nextEle);
    nextEle.next = head;
    return temp;
    
    
    // if(!head || !head.next) return head;
    // let newHead = null;
    // while(head){
    //     let temp = head.next;
    //     head.next = newHead;
    //     newHead = head;
    //     head = temp;
    // }
    // return newHead;
};