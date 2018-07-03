const exist = (board, word) => {
  if (!board || board.length === 0 || word === '') {
    return false;
  }
 
  let rows = board.length;
  let cols = board[0].length;
 
  const dfs = (row, col, ptr) => {
    if (ptr === word.length) {
        return true;
    }
    
    if (row >= rows || row < 0 || col >= cols || col < 0) {
        return false;
    }
    if (board[row][col] !== word[ptr] || board[row][col] === null) {
        return false
    }
    
    board[row][col] = null; 
    if (dfs(row + 1, col, ptr + 1) || 
        dfs(row - 1, col, ptr + 1) ||
        dfs(row, col + 1, ptr + 1) ||
        dfs(row, col - 1, ptr + 1)
      ) {
        return true
    }
    
    board[row][col] = word[ptr];
    return false;
  };
 
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (dfs(i, j, 0)) {
            console.log('DONE');
            return true;
        }
    }
 };
 
 return false;
};

/*
  ANALYSIS:
    Runtime beats 98.98% of LeetCode solutions
*/