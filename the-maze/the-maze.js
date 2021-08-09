/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
    let visited = {}, direction = [[0,1], [1,0], [0,-1],[-1,0]], m = maze.length, n = maze[0].length;
    
    function dfs(start, destination){
        let key = start.join('_');
        if(visited[key]) return false;
        visited[key] = true;
        if(start[0] === destination[0] && start[1] === destination[1]) return true;
        for(let [x,y] of direction){
            let [i, j] = start;
            while((i+x)>=0 && (i+x)<m && (j+y)>=0 && (j+y)<n && maze[i+x][j+y] !== 1){
                i += x;
                j += y;
            }
            if(!visited[`${i}_${j}`] && dfs([i,j], destination)){
                return true;
            }
        }
        return false;
    }
    return dfs(start, destination);
};