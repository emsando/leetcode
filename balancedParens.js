/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

const isValid = (s) => {
  let open = {
      '(': ')',
      '{': '}',
      '[': ']',
  };
  let closed = {
      '}': true,
      ')': true,
      ']': true
  };
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      
      if (open[char]) {
          stack.push(char);
      } else if (closed[char]) {
          if (open[stack.pop()] !== char) {
              return false;
          }
      }
  }
  
  if (stack.length) {
      return false
  }
  return true;
};

/*
  ANALYSIS:
    Time complexity is O(n)
    Space complexity is O(n)
    Runtime beats 99.43% of LeetCode solutions
*/