/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

const threeSum = (nums) => {
  let solutionSet = [];
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
          continue;
      }
      
      let left = i + 1; 
      let right = nums.length - 1; 
      
      while (left < right) {
          let sum = nums[i] + nums[left] + nums[right];
          if (sum === 0) {
              solutionSet.push([nums[i], nums[left], nums[right]]);
              
              let temp = nums[left];
              while (nums[left] === temp) {
                  left++;
              }
              temp = nums[right];
              while (nums[right] === temp) {
                  right--;
              }
          }
          if (sum < 0) {
              left++;
          } else if (sum > 0) {
              right--;
          }
      }
  }
  
  return solutionSet;
};

/*
  ANALYSIS:
    Time complexity is O(n^2)
    Runtime beats 89% of LeetCode solutions
*/