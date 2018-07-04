/* 
  Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

  Example 1:

  Input:
  11110
  11010
  11000
  00000

  Output: 1
  Example 2:

  Input:
  11000
  11000
  00100
  00011

  Output: 3
*/

const numIslands = (grid) => {
  let count = 0;
  let rows = grid.length;
  if (rows === 0) {
      return count;
  }
  let cols = grid[0].length;
  
  const markIsland = (row, col) => {
      if (row >= rows || row < 0 || col >= cols || col < 0) {
          return
      }
      if (grid[row][col] === '0') {
          return
      }
  
      grid[row][col] = '0';
      markIsland(row + 1, col);
      markIsland(row - 1, col);
      markIsland(row, col + 1);
      markIsland(row, col - 1);
  }; 
  
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === '1') {
              count++;
              markIsland(i, j);
          }
      }
  }
  
  return count;
};

/*
  ANALYSIS:
    Runtime beats 98.47% of LeetCode solutions
    Time Complexity is O(rows * cols) or O(n) where n is elements in the grid;
    Space Complexity is O(1)
*/