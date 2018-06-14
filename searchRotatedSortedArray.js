/*
  Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

  (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

  You are given a target value to search. If found in the array return its index, otherwise return -1.

  You may assume no duplicate exists in the array.

  Your algorithm's runtime complexity must be in the order of O(log n).

  Example 1:

  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4
  Example 2:

  Input: nums = [4,5,6,7,0,1,2], target = 3
  Output: -1
*/

const search = (nums, target) => {
  let start = 0;
  if (nums[start] === target) {
      return start;
  }
  let end = nums.length - 1;
  if (nums[end] === target) {
      return end;
  }
  let mid = null;
  let num = null;
  
  while (start < end) {
      mid = Math.floor((start + end) / 2);
      
      if ((nums[mid] < nums[0]) === (target < nums[0])) {
          num = nums[mid]
      } else if (target < nums[0]) {
          num = -Infinity;
      } else {
          num = Infinity;
      }
                 
      if (num < target) {
          start = mid + 1;
      }
      else if (num > target) {
          end = mid;
      }
      else {
          return mid;
      }
  };
  
  return -1;
};

/*
  ANALYSIS:
    Time complexity is O(n)
    Space complexity is O(n)
    Runtime beats 86.83% of LeetCode solutions
*/