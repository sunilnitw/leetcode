class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> ll = new ArrayList<Integer>();
        int row = matrix.length;
        
        if(row == 0)return ll;
        
        int dir[][] = new int[][]{{0,1},{1,0},{0,-1},{-1,0}}, col = matrix[0].length;
        int r=0, c=0, count = 0, d=0, max = 1000;
        while(count < (row*col)){
            ll.add(matrix[r][c]);
            count++;
            matrix[r][c] = max;
            int tempr = Math.floorMod(r+dir[d][0], row);
            int tempc = Math.floorMod(c+dir[d][1], col);
            
            if(matrix[tempr][tempc] == max){
                d = (d+1) % 4;
            }
            r = Math.floorMod(r+dir[d][0], row);
            c = Math.floorMod(c+dir[d][1], col);
        }
        return ll;
    }
}
