const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function spiralTraversal(matrix) {
  // create container for solution
  const solution = [];

  // create column start & end indices
  let columnStart = 0,
    // this is the index of the last item in a row
    columnEnd = matrix[0].length - 1;

  // create row start & end indices
  let rowStart = 0,
    // this is the index of the last row in the matrix
    rowEnd = matrix.length - 1;

  // create direction variable
  let direction = 0;
  console.log({ columnEnd, rowEnd });
  // while statement to keep it running
  // we know we have work to do as long as there are indices between the starts and ends
  while (rowStart <= rowEnd && columnStart <= columnEnd) {
    // switch statement to determine which way to iterate
    switch (direction) {
      case 0: // iterate left-to-right
        // for loop with i moving across a row
        for (let i = columnStart; i <= columnEnd; i++) {
          // push each item into solution
          solution.push(matrix[rowStart][i]);
        }
        // increment rowStart
        rowStart++;
        break;
      case 1: // iterate top-to-bottom
        // for loop with i moving down a column
        for (let i = rowStart; i <= rowEnd; i++) {
          solution.push(matrix[i][columnEnd]);
        }
        // decrement columnEnd
        columnEnd--;
        break;
      case 2: // iterate right-to-left
        // for loop with i moving reverse along row
        for (let i = columnEnd; i >= columnStart; i--) {
          solution.push(matrix[rowEnd][i]);
        }
        // decrement rowEnd
        rowEnd--;
        break;
      case 3: // iterate bottom-to-top
        // for loop with i moving bottom to top
        for (let i = rowEnd; i >= rowStart; i--) {
          solution.push(matrix[i][columnStart]);
        }
        // increment columnStart
        columnStart++;
        break;
    }
    // increment direction and % 4 to keep it looping (4 directions)
    direction = (direction + 1) % 4;
    console.log({ direction });
  }
  return solution;
}

console.log(spiralTraversal(matrix));
