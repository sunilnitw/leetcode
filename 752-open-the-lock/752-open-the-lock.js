/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let visited = deadends.reduce((acc, str)=>{
        acc[str] = str;
        return acc;
    },{});
    let patterns = ["0000"], count = 0;
    if(visited["0000"] || visited[target]) return -1;
    if(target === "0000") return 0;
    
    const getTurns = (pattern, j)=>{
        const leftTurn = pattern.split(''), rightTurn = pattern.split("");
        leftTurn[j] = (+leftTurn[j] + 1)%10;
        rightTurn[j] = (+rightTurn[j] + 9)%10;
        return [leftTurn.join(''), rightTurn.join('')];
    }
    while(patterns.length>0){
        count++;
        let n = patterns.length;
        for(let i=0; i<n; i++){
            const pattern = patterns.shift()
            for(let j=0; j<4; j++){
                for(let turn of getTurns(pattern, j)){
                    // console.log(turn)
                    if(!visited[turn]){
                        if(turn === target) return count;
                        patterns.push(turn);
                    }
                    visited[turn] = turn;
                }
            }
        }
    }
    return -1;
};