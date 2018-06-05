/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

// NOTE: my solution assumes I'm allowed to alter the input matrix

const spiralOrder = (matrix) => {
  let output = [];
  let m = matrix.length;
  if (m === 0) {
      return output;
  }
  let n = matrix[0].length;
  let size = m * n;
  
  let row = 0;
  let col = 0;
  let dir = 'east';
  
  while (output.length < size) {
      output.push(matrix[row][col]);
      matrix[row][col] = undefined; 
      
      if (dir === 'east') {
          if (matrix[row][col + 1] === undefined) {
              dir = 'south';
              row++;
              continue;
          } else {
              col++;
              continue;
          }
      }
      if (dir === 'south') {
        // the first time we go south, if we tried to check [row + 1][col] at the bottom, we'd be attempting
        // a property lookup on undefined, which will throw an error, so we need the first check in addition to the usual 2nd one
          if (matrix[row + 1] === undefined || matrix[row + 1][col] === undefined) {
              dir = 'west';
              col--;
              continue;
          } else {
              row++;
              continue;
          }
      }
      if (dir === 'west') {
          if (matrix[row][col - 1] === undefined) {
              dir = 'north';
              row--;
              continue;
          } else {
              col--;
              continue;
          }
      }
      if (dir === 'north') {
          if (matrix[row - 1][col] === undefined) {
              dir = 'east';
              col++;
          } else {
              row--;
          }
      }
  }
  
  return output;
};

/*
  ANALYSIS:
    Time complexity is O(m * n);
    Space complexity is O(m * n);
    Runtime beats 95.69% of LeetCode solutions
*/