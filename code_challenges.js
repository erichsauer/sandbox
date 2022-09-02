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

function spiralTraversal2(matrix) {
  // first we need to define some variables for defining the bounds of the matrix
  let columnStart = 0,
    columnEnd = matrix[0].length - 1,
    rowStart = 0,
    rowEnd = matrix.length - 1;

  // next, let's define a variable to keep track of navigation
  let direction = 0;

  // now we'll create a container to hold our solution!
  const solution = [];

  // great! now we'll need a loop happening until the matrix has been traversed completely. we'll increment/decrement row/column start/end after each pass so the matrix will have been traversed when columnStart === columnEnd && rowStart === rowEnd
  while (columnStart <= columnEnd && rowStart <= rowEnd) {
    // let's use a switch statement to keep things tidy; we'll enter the switch statement after each change in direction
    switch (direction) {
      // here we'll create a series of for loops to iterate across, up, or down depending on the case
      case 0: // left-to-right across a row, from columnStart to columnEnd
        for (let i = columnStart; i <= columnEnd; i++)
          solution.push(matrix[rowStart][i]);
        // now, make sure to increment rowStart so that we iterate through the next row when we arrive back here
        rowStart++;
        break;
      case 1: // top-to-bottom down a column, from rowStart to rowEnd
        for (let i = rowStart; i <= rowEnd; i++)
          solution.push(matrix[i][columnEnd]);
        // now, make sure to decrement columnEnd so that we iterate through the previous column when we arrive back here
        columnEnd--;
        break;
      case 2: // right-to-left across a row, from columnEnd to columnStart
        for (let i = columnEnd; i >= columnStart; i--)
          solution.push(matrix[rowEnd][i]);
        // now, make sure to decrement rowEnd so that we iterate through the previous row when we arrive back here
        rowEnd--;
        break;
      case 3: // bottom-to-top up a column, from rowEnd to rowStart
        for (let i = rowEnd; i >= rowStart; i--)
          solution.push(matrix[i][columnStart]);
        // now, make sure to increment columnStart so that we iterate through the next column when we arrive back here
        columnStart++;
    }
    // make sure to increment direction so that we move on to the next direction. we'll use % 4 here because we're going to be going in a four-direction loop
    direction = (direction + 1) % 4;
    console.log(direction);
  }
  return solution;
}

function spiralTraversal3(matrix) {}

console.log(spiralTraversal3(matrix));
