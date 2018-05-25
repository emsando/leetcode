/*

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

[phone dialpad image]

Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

const letterCombinations = (digits) => {
  if (digits === '') {
      return [];
  }
  let numLetters = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz'
  };
  let result = [];
  const recurse = (string, digitPointer) => {
      if (string.length === digits.length) {
          result.push(string);
          return
      }
      
      let letters = numLetters[digits[digitPointer]];
      for (let i = 0; i < letters.length; i++) {
          let newString = string + letters[i];
          recurse(newString, digitPointer + 1);
      }
  };
  recurse('', 0)
  return result;
};

/*
  ANALYSIS:
    Time complexity is O(4^n) where n is likely less than 15 (length imposed by International Telecommunication Union)
    It's 4, not 3, because in the worst case the number is all 9's and 7's which have 4 char options
    For a US number n = 10
    But to be honest I'm not sure LeetCode is testing very large strings on this problem. 

    Space complexity is also O(4^n)

    Runtime beats 88% of LeetCode solutions
*/