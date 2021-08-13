/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
    let visited = {}, dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    function moveBack(){
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }
    
    function backtrack(i, j, d){
        const key = `${i}_${j}`;
        if(visited[key]) return;
        visited[key] = true;
        robot.clean();
        for(let k=0; k<4; k++){
            let newD = (d+k)%4;
            let [a,b] = dir[newD];
            let newKey = `${i+a}_${j+b}`;
            if(!visited[newKey] && robot.move()){
                backtrack(i+a, j+b, newD);
                moveBack();
            }
            robot.turnRight();
        }
    }
    
    backtrack(0, 0, 0);
};