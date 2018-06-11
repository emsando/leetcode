/*
  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

  For example, given n = 3, a solution set is:

  [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]
*/

const generateParenthesis = (n) => {
  let result = [];
  let subN = (n - 1) * 2;
  let open = '(';
  let close = ')';
  
  const addToString = (string, openCount, closeCount) => {
      if (string.length === subN) {
          return result.push(open + string + close);
      }
      
      if (openCount < subN / 2) {
          let newString = string + open;
          addToString(newString, openCount + 1, closeCount)
      }
      if (closeCount < subN / 2 && closeCount <= openCount) {
          let newString = string + close;
          addToString(newString, openCount, closeCount + 1);
      }
  }
  
  addToString('', 0, 0);
  return result;
};

/*
  ANALYSIS:
    Time complexity is exponential with respect to n
    Space complexity is exponential with respect to n

    Both are more precisely O(4^n / Math.sqrt(n)) https://leetcode.com/problems/generate-parentheses/solution/
    It's easy to tell that both are exponential, but deriving the above is much more complicated (I just looked it up)

    Runtime beats 96.64% of LeetCode solutions
*/