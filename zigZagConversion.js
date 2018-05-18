/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/

const convert = (s, numRows) => {
  if (numRows === 1) {
      return s;
  }
  
  let rows = [];
  for (let i = 0; i < numRows; i++) {
      rows.push([]);
  }
  
  let tracker = 0;
  let reverse = false;
  for (let i = 0; i < s.length; i++) {
      rows[tracker].push(s[i]);
      
      if (tracker === numRows - 1) {
          tracker--;
          reverse = true;
      } else if (tracker === 0) {
          tracker++;
          reverse = false;
      } else if (reverse) {
          tracker--;
      } else {
          tracker++;
      }
  }
  rows = rows.map((arr) => arr.join(''));
  result = rows.join('');
  return result;
};

/*
  ANALYSIS:
    Time complexity is O(n)
    Space complexity is O(n)
    Runtime beats 72% of LeetCode solutions
*/