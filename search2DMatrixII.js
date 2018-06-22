/*
  Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

  Integers in each row are sorted in ascending from left to right.
  Integers in each column are sorted in ascending from top to bottom.
  Example:

  Consider the following matrix:

  [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  Given target = 5, return true.

  Given target = 20, return false.
*/

const searchMatrix = (matrix, target) => {
  if (matrix.length === 0 || matrix[0]. length === 0) {
      return false;
  }
  
  let row = 0; 
  let col = matrix[0].length - 1;
  
  while (row < matrix.length && col >= 0) {
      let val = matrix[row][col];
      if (val === target) {
          return true;
      }
      if (val < target) {
          row++;
      } else {
          col--;
      }
  }
  
  return false;
};

/*
  ANALYSIS:
    Time complexity is O(m + n)
    Space complexity is O(1)
    Runtime beats 98.52% of LeetCode solutions
*/