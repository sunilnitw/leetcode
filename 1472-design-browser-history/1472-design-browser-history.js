/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.visits = [homepage];
    this.move = [];
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.visits.push(url);
    this.move = [];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(this.visits.length>1 &&steps-- > 0){
        this.move.push(this.visits.pop());
    }
    return this.visits[this.visits.length-1];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
     while(this.move.length>0 && steps-->0){
        this.visits.push(this.move.pop())
    }
    return this.visits[this.visits.length-1];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */