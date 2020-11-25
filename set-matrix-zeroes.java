class Solution {
    public void setZeroes(int[][] matrix) {
        int row = matrix.length, col = matrix[0].length, max_val = 989898;
        boolean isCol = false;
        for(int i=0; i<row; i++){
            if(matrix[i][0] == 0){
                isCol = true;
            }
            for(int j=1; j<col; j++){
                if(matrix[i][j] == 0){
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        
        for(int i=1; i<row; i++){
            for(int j=1; j<col; j++){
                if(matrix[i][0] == 0 || matrix[0][j] == 0)
                    matrix[i][j] = 0;
            }
        }
        
        if(matrix[0][0] == 0){
            for(int j=0; j<col; j++){
                matrix[0][j] = 0;
            }
        }
        
        if(isCol == true){
            for(int j=0; j<row; j++){
                matrix[j][0] = 0;
            }
        }
        
        
        
//         for(int i=0; i<row; i++){
            
//             boolean isZeroFound = false;
//             for(int j=0; j<col; j++){
//                 if(matrix[i][j] == 0){
//                     // System.out.println(i+" "+j);
                    
//                     for(int k = 0; j<col && k<row; k++){
//                         if(matrix[k][j] != 0 || k == i)
//                         matrix[k][j] = max_val;
//                     }
//                     if(isZeroFound == false){
//                         for(int k = 0; j<col && k<col; k++){
//                             if(matrix[i][k] != 0 || k == j){
//                                 matrix[i][k] = max_val;
//                             } else if(isZeroFound == false){
//                                 isZeroFound = true;
