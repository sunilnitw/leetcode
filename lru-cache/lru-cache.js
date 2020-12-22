/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = {};
    this.arr = [];
};
​
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.hasOwnProperty(key))return -1;
    let pos = this.arr.indexOf(key);
    this.arr.splice(pos, 1);
    this.arr.push(key);
    return this.map[key];
};
​
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!this.map.hasOwnProperty(key)) {
        if(this.arr.length === this.capacity){
            delete this.map[this.arr[0]];
            this.arr.shift()
        }
    } else {
        let pos = this.arr.indexOf(key);
        this.arr.splice(pos, 1);
    }
    this.arr.push(key);
    this.map[key] = value;    
    
};
​
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
