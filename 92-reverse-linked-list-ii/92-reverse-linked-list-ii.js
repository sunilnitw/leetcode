/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head.next || left === right) return head;
    let leftNode = null, rightNode = null, temp = head, prevLeftNode  = null, prev  =  null, index = 1;
    while(temp){
        if(index === left) {
            prevLeftNode  = prev;
            leftNode  = temp;
        }
        else  if(index === right) rightNode = temp;
        prev  = temp;
        temp = temp.next;
        index++;
    }
    
    if(!leftNode || !rightNode) return head;
    
    let tempHead = rightNode.next;
    
    if(prevLeftNode) prevLeftNode.next = rightNode;
    else head = rightNode;
    
    while(leftNode !== rightNode){
        let temp = leftNode.next;
        leftNode.next = tempHead;
        tempHead = leftNode;
        leftNode = temp;
    }
    rightNode.next = tempHead;
    // console.log(head, leftNode, rightNode, prevLeftNode, tempHead)
    
    return head;
};