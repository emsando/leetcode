/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

const groupAnagrams = (strs) => {
  let wordArrays = {};
  
  strs.forEach(string => {
      let sorted = string.split('').sort().join('');
      if (wordArrays[sorted]) {
          wordArrays[sorted].push(string);
      } else {
          wordArrays[sorted] = [string];
      }
  })
  
  let result = [];
  for (let key in wordArrays) {
      result.push(wordArrays[key]);
  }
  
  return result;
};

/*
  ANALYSIS:
    Time complexity is O(n)
    Space complexity is O(n)
    Runtime beats 93.90% of LeetCode solutions
*/