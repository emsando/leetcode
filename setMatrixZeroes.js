/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
*/

const setZeroes = (matrix) => {
  let rows = {};
  let cols = {};

  for (let row = 0; row < matrix.length; row++) {
      for (let col= 0; col < matrix[row].length; col++) {
          if (matrix[row][col] === 0) {
              rows[row] = true;
              cols[col] = true;
          }
      }
  }
  
  for (let rowNum in rows) {
      matrix[rowNum] = matrix[rowNum].map(item => 0);
  }
  
  for (let colNum in cols) {
      for (let row = 0; row < matrix.length; row++) {
          matrix[row][colNum] = 0;
      }
  }
};

/*
  ANALYSIS:
    Time complexity is O(mn)
    Space complexity is O(m + n)
    Runtime beats 90.20% of LeetCode solutions
*/