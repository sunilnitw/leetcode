/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let root = new Node();
    
    let h1 = head;
    while(h1){
        let node = new Node(h1.val, h1.next, null);
        h1.next = node;
        h1 = node.next;
    }
    h1=head;
    while(h1){
        if(h1.random){
            h1.next.random = h1.random.next;
        }
        h1 = h1.next.next;
    }
    
    h1 = head;
    let r1 = root;
    while(h1){
        let next  = h1.next.next;
        
        r1.next = h1.next;
        r1 = r1.next;
        
        h1.next = next;
        h1 = h1.next;
    }
    
    return root.next;
};