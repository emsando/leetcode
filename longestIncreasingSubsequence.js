/*
  Given an unsorted array of integers, find the length of longest increasing subsequence.

  Example:

  Input: [10,9,2,5,3,7,101,18]
  Output: 4 
  Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
  Note:

  There may be more than one LIS combination, it is only necessary for you to return the length.
  Your algorithm should run in O(n2) complexity.

  Follow up: Could you improve it to O(n log n) time complexity?
*/

// O(n2) solution:

const lengthOfLIS = (nums) => {
  let maxLen = 0;
  let dp = new Array(nums.length).fill(1);
  
  for (let i = nums.length - 1; i >= 0; i--) {
      let maxFromHere = 0;
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] > nums[i]) {
              let temp = dp[i] + dp[j];
              if (temp > maxFromHere) {
                  maxFromHere = temp;
              }
          }
      }
      dp[i] = Math.max(dp[i], maxFromHere);
      maxLen = Math.max(maxLen, dp[i]);
  }
  
  return maxLen;
};

/*
  ANALYSIS:
    Time complexity is O(n^2)
    Space complexity is O(n)
    Runtime beats 80.30% of LeetCode solutions
*/