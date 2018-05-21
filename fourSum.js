/*
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

const fourSum = (nums, target) => {
  // adapted from C++ solution submitted by LeetCode user cx1992
  // https://leetcode.com/cx1992/
  const result = [];
  let n = nums.length;
  
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 3; i++) {
      // avoid possibility of duplicate quadruplets
      if (i > 0 && nums[i] == nums[i-1]) continue;
      // exit loop if we're out of options
      if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
      // skip to next value of i if there's no chance of matches
      if (nums[i] + nums[n - 3] + nums[n - 2] + nums[n - 1] < target) continue;
      
      for (let j = i + 1; j < n - 2; j++) {
          // avoid possibility of duplicate quadruplets
          if ( j > i + 1 && nums[j] === nums[j - 1]) continue;
          // exit loop if we're out of options
          if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
          // skip to next value of j if there's no chance of matches 
          if (nums[i] + nums[j] + nums[n - 2] + nums[n - 1] < target) continue;
          
          let left = j + 1;
          let right = n - 1;
          
          while (left < right){
              let sum = nums[left] + nums[right] + nums[i] + nums[j];
              if (sum < target) left++;
              else if (sum > target) right--;
              else {
                  result.push([nums[i], nums[j], nums[left], nums[right]]);
                  // move pointers past current values if duplicates exist
                  // note that values are adjusted before arr lookup is executed with this syntax
                  while (nums[++left] === nums [left - 1] && left < right);
                  while(nums[--right] === nums[right + 1] && left < right);
              }
          }
      }
  }
  
  return result;
};

/*
  ANALYSIS:
    Time complexity is O(n^3)
    Runtime beats 100% of LeetCode solutions
*/