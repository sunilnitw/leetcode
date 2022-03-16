/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2) return list1 || list2;
    let newHead = new ListNode(),  tempHead = newHead;
   
    while(list1 && list2){
        if(list1.val<=list2.val){
            tempHead.next = list1;
            list1 = list1.next;
        } else {
            tempHead.next = list2;
            list2 = list2.next;
        }
        tempHead = tempHead.next;
    }
    if(list1)tempHead.next = list1;
    if(list2)tempHead.next = list2;
    return newHead.next;
};