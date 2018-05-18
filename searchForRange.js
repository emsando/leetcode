/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

const searchRange = (nums, target) => {
  // this is just binary search with a twist on what to return
  let result = null;
  let left = 0;
  let right = nums.length - 1;
  let foundIndex = null; 
  
  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      
      if (nums[mid] === target) {
          foundIndex = mid;
          break;
      }
      if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  
  if (foundIndex === null) {
      return [-1, -1]
  }
  
  // fan out to find range
  let start = foundIndex;
  while (nums[start] === nums[start - 1]) {
      start--;
  }
  let end = foundIndex;
  while (nums[end] === nums[end + 1]) {
      end++;
  }
  
  return [start, end];
};

/*
  ANALYSIS:
    Time complexity is O(logn)
    Space complexity is O(1)
    Runtime beats 98.73% of LeetCode solutions
*/