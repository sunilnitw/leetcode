/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    const trace = (node)=>{
        if(!node) return node;
        let ref = node, prev = node;
        while(node){
            prev = node;
            if(node.child){
                let next = node.next;
                let [first, last] = trace(node.child);
                
                node.child=null;
                node.next = first;
                first.prev= node;
                if(next){
                    last.next = next;
                    next.prev = last;
                    node = next;
                }else{
                    node = last;
                }
            } else {
                node = node.next;                
            }
        }
        return [ref, prev];
    }
    trace(head);
    return head;
};