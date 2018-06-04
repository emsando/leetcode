/*
  Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
  Example 1:

  Input: "babad"
  Output: "bab"
  Note: "aba" is also a valid answer.
  Example 2:

  Input: "cbbd"
  Output: "bb"
*/

const longestPalindrome = (s) => {
  let left;
  let right;
  let size = s.length;
  let max = -Infinity;
  let start = 0;
  
  for (let i = 0; i < size; i += 0.5){
      left = Math.ceil(i - 1);
      right = Math.floor(i + 1);
      
      while (left >= 0 && right < size) {
          if (s[left] === s[right]) {
              left--;
              right++;
          } else { 
              break;
          }
      }
      if (right - left - 1 > max){
          max = right - left - 1;
          start = left + 1;
      }
  }

  return s.slice(start, start + max);
};

/*
  ANALYSIS:
    Time complexity is O(n^2)
    Space complexity is O(1)
    Runtime beats 86.54% of LeetCode solutions
*/