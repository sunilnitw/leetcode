/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    let INF = 2147483647, queue = [], m = rooms.length, n = rooms[0].length, visited = {};
    const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(rooms[i][j] === 0){
                queue.push([i,j]);
            }
        }
    }
    
    function isValidCell(i,j){
        if(i<0 ||j<0 ||i>=m ||j>=n || rooms[i][j] === -1) return false;
        return true;
    }
    
    while(queue.length>0){
        let [x, y] = queue.shift(), key = `${x}_${y}`;
        if(!visited[key]){
            for(let [i,j] of dir){
                if(isValidCell(i+x, j+y)){
                    rooms[i+x][j+y] = Math.min(1+rooms[x][y], rooms[i+x][j+y]);
                    queue.push([i+x, j+y]);
                }
            }
        }
        visited[key] = true;
    }
};