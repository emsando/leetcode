/*
Given a string, find the length of the longest substring without repeating characters (only alphabetic characters).

Examples:
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

const lengthOfLongestSubstring = (s) => {
  let result = 0;
  let ptr = 0;
  let table = {}; 
  
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (table.hasOwnProperty(char)) {
          ptr = Math.max(ptr, table[char] + 1); // don't want pointer to ever decrement
      }
      result = Math.max(result, i - ptr + 1); // add 1 to get actual length since i and ptr are indices
      table[char] = i;
  }
  
  return result;
};

/*
  ANALYSIS:
    Time complexity is O(n)
    Space complexity is O(min(n, 26)) - max size would be the whole alphabet
    Runtime beats 72% of LeetCode solutions
*/