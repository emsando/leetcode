/* 
  Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

  Example:

  Given array nums = [-1, 2, 1, -4], and target = 1.

  The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

const threeSumClosest = (nums, target) => {
  let closest = null;
  let diff = Infinity;
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
      let left = i + 1;
      let right = nums.length - 1;
      
      while (left < right) {
          let current = nums[i] + nums[left] + nums[right];
          let currDiff = Math.abs(target - current);
          if (currDiff < diff) {
              closest = current;
              diff = currDiff;
          }
          
          if (current < target) {
              left++;
          } else if (current > target) {
              right--;
          } else {
              return closest;
          }
      }
  }
  
  return closest;
};

/* 
  ANALYSIS: 
  Time Complexity: O(n^2)
  Space Complexity: O(1)
  Runtime beats 98.32 of LeetCode solutions
*/