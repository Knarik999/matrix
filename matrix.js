function printAry(matrix) {

    let answer = "";
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        answer += matrix[i][j] + '\t';
      }
      answer += "\n";
    }
    return answer;
  }
  
  module.exports = {
    printAry
  }