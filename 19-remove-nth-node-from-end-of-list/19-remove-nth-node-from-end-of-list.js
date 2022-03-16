/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let temp = head, foundEle = null, prevFoundEle  = null;
    while(temp){
        n--;
        if(n<=0){
            prevFoundEle  = foundEle
            if(foundEle){
                foundEle = foundEle.next;
            } else {
                foundEle = head;
            }
        }
        temp = temp.next;
    }
    if(prevFoundEle) {
        prevFoundEle.next = foundEle.next;
        return head;
    }
    return foundEle.next;
    
};