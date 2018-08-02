/*
  Given a 32-bit signed integer, reverse digits of an integer.

  Example 1:

  Input: 123
  Output: 321
  Example 2:

  Input: -123
  Output: -321
  Example 3:

  Input: 120
  Output: 21
  Note:
  Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. 
  For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

const reverse = (x) => {
  let negative = false; 
  if (x < 0 ) {
      negative = true;
  }
  
  x = Math.abs(x);
  let str = x.toString();
  str = str.split('').reverse().join('');
  let result = Number(str);
  
  if (result > Math.pow(2, 31)) {
      return 0;
  }
  
  return negative ? -result : result;
};

/*
  ANALYSIS:
    Time complexity is O(n) where n is number of digits
    Space complexity is O(n)
    Runtime beats 85.43% of LeetCode solutions
*/