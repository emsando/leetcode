/*
  A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

  The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

  How many possible unique paths are there?

  Note: m and n will be at most 100.

  Example 1:

  Input: m = 3, n = 2
  Output: 3
  Explanation:
  From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
  1. Right -> Right -> Down
  2. Right -> Down -> Right
  3. Down -> Right -> Right
  Example 2:

  Input: m = 7, n = 3
  Output: 28
*/

const uniquePaths = (m, n) => {
  let grid = new Array(n).fill(new Array(m).fill(1));
  
  for (let i = n - 2; i >= 0; i--) {
      for (let j = m - 2; j >= 0; j--) {
          grid[i][j] = grid[i][j + 1] + grid[i + 1][j];
      }
  }
  
  return grid[0][0];
};

/*
  ANALYSIS:
    Time complexity is O(mn)
    Space complexity is O(mn)
    Runtime beats 98.03% of LeetCode solutions
*/