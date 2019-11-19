function multiplyMatrices(matrix1, matrix2){
  let ary1 = matrix1[0];
  let ary2 = [];
  for (let i = 0; i < matrix2.length; i++){
    ary2.push(matrix2[i][0]);
  }
  if(ary1.length === ary2.length){
    let matrix1Rows = matrix1.length;
    let matrix1Cols = matrix1[0].length;
    let matrix2Cols = matrix2[0].length;
    let answer = new Array(matrix1Rows);
    for (let z = 0; z < matrix1Rows; z++) {
      answer[z] = new Array(matrix2Cols);
      for (let e = 0; e < matrix2Cols; e++) {
        answer[z][e] = 0;
        for (let i = 0; i < matrix1Cols; i++) {
          answer[z][e] += matrix1[z][i] * matrix2[i][e];
        }
      }
    }
    return answer;
  }else{
    return "numbers doesn't much";
  }
}

module.exports = {
  multiplyMatrices
};