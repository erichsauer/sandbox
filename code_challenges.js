const matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function spiralTraversal(matrix) {
  // create container for solution
  const solution = [];

  // create column start & end indices
  let columnStart = 0,
    columnEnd = matrix[0].length - 1;

  // create row start & end indices
  let rowStart = 0,
    rowEnd = matrix.length - 1;

  // create direction variable
  let direction = 0;

  // while statement to keep it running
  // we know we have work to do as long as there are indices between the starts and ends
  while (rowStart <= rowEnd && columnStart <= columnEnd)
    // switch statement to determine which way to iterate
    switch (direction) {
      case 0: // iterate left-to-right
        // for loop with i moving across a row

        break;
      case 1: // iterate top-to-bottom
        // for loop with i moving down a column

        break;
      case 2: // iterate right-to-left
        // for loop with i moving reverse along row

        break;
      case 3: // iterate bottom-to-top
        // for loop with i moving bottom to top

        break;
    }
  // as we iterate, push values to solution
  // increment direction and % 4 to keep it looping (4 directions)

  return solution;
}

console.assert(
  [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10].includes(
    spiralTraversal(matrix)
  )
);
