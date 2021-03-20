/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const hash = {};
    function doDfs(pos){
        if(hash[pos] === true) return;
        hash[pos] = true;
        for(let i of rooms[pos]){
            doDfs(i);
        }
    }
    doDfs(0);
    return Object.keys(hash).length === rooms.length;
};