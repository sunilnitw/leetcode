/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
        if(obstacleGrid[m-1][n-1] === 1 || obstacleGrid[0][0] === 1) return 0;
        if(m == 1 && n == 1)return 1;
        if(m===1 || n===1){
            for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
                if(obstacleGrid[i][j] == 1)return 0;
            }
            }
            return 1;
        }
		if ((obstacleGrid[0][1] == 1 && obstacleGrid[1][0] === 1) || (m>1 && n>1 && obstacleGrid[m - 2][n - 1] == 1 && obstacleGrid[m - 1][n - 2] === 1)) return 0;

		let isObstacke = false;
		for (let i = 0; i < m; i++) {
			if (obstacleGrid[i][0] === 1) {
				isObstacke = true;
			}
			obstacleGrid[i][0] = isObstacke ? 0 : 1;
		}
		isObstacke = false;
		for (let i = 1; i < n; i++) {
			if (obstacleGrid[0][i] === 1) {
				isObstacke = true;
			}
			obstacleGrid[0][i] = isObstacke ? 0 : 1;
		}

		for (let i = 1; i < m; i++) {
			for (let j = 1; j < n; j++) {
				if (obstacleGrid[i][j] == 1) {
					obstacleGrid[i][j] = 0;
				} else {
					obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
				}
			}
		}

		return obstacleGrid[m - 1][n - 1];
};