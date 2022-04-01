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
        // console.log('::::::::::::::::',node)
        while(node){
            prev = node;
            // console.log('node--------  ', node)
            if(node.child){
                let next = node.next;
                let [first, last] = trace(node.child);
                
                // console.log('fff',first, last)
                node.child=null;
                node.next = first;
                first.prev= node;
                if(next){
                    last.next = next;
                    next.prev = last;
                    node = next;
                    // console.log('lfhhfhdfhdfh')
                }else{
                    node = last;
                }
                // console.log('node: ', node, next)
                // node = next;
            } else {
                node = node.next;                
            }
        }
        // console.log('reeef: ', ref, prev)
        return [ref, prev];
    }
    trace(head);
    return head;
};