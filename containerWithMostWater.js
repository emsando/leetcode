/* 
  Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
  n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
  Find two lines, which together with x-axis forms a container, such that the container contains the most water.

  Note: You may not slant the container and n is at least 2.

  My note: the problem description is terrible - this could be explained much more precisely.

  My take: 

  Given an array of n non-negative values, find the largest container that could be created using the array values as 
  side heights and the difference in their indices as width. 

  For example, given [3, 1, 1, 1, 3] the largest container is 3 x 4
  Given [1, 1, 3, 1, 1, 1, 1, 1], the largest container is 1 x 7
*/

const maxArea = (heights) => {
  let max = 0;
  let left = 0;
  let right = heights.length - 1; 
  
  while (left < right) {
      let upperBound = Math.min(heights[left], heights[right]);
      max = Math.max(max, upperBound * (right - left));
      
      if (heights[left] < heights[right]) {
          left++;
      } else {
          right--;
      }
  }
  
  return max;
};

/* 
  ANALYSIS: 
  Time Complexity: O(n)
  Space Complexity: O(1)
  Runtime beats 94.26 of LeetCode solutions
*/