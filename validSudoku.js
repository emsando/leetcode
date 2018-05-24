/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/

const isValidSudoku = (board) => {
  let table = {};
  for (let i = 0; i < 9; i++) {
      table[`row${i}`] = {}
      table[`col${i}`] = {}
      table[`square${i}`] = {}
  }
  
  for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
          let val = board[row][col];
          if (val === '.') {
              continue;
          }
          if (table[`row${row}`][val] || table[`col${col}`][val]) {
              return false
          }
          table[`row${row}`][val] = true;
          table[`col${col}`][val] = true; 
          
          let squareY = Math.ceil((row + 1) / 3) - 1;
          let squareX = Math.ceil((col + 1) / 3) - 1;
          
          let square = 3 * squareY + squareX;
          
          if (table[`square${square}`][val]) {
              return false
          }
          table[`square${square}`][val] = true;
      }
  }
  
  return true;
};

/*
  ANALYSIS:
    Time complexity is O(n) where n = 81, so arguably constant but O(n) describes we need to traverse whole board
    Space complexity is O(3n) - for a valid completed board we will have stored any given coordinate value in 3 objects
    Runtime beats 71% of LeetCode solutions
*/