/* 
  A peak element is an element that is greater than its neighbors.

  Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

  The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

  You may imagine that nums[-1] = nums[n] = -∞.

  Example 1:

  Input: nums = [1,2,3,1]
  Output: 2
  Explanation: 3 is a peak element and your function should return the index number 2.
  Example 2:

  Input: nums = [1,2,1,3,5,6,4]
  Output: 1 or 5 
  Explanation: Your function can return either index number 1 where the peak element is 2, 
              or index number 5 where the peak element is 6.
  Note:

  Your solution should be in logarithmic complexity.
*/

const findPeakElement = (nums) => {
  if (nums.length === 0) {
      return -1;
  }
  if (nums.length === 1) {
      return 0;
  }
  
  let low = 0; 
  let high = nums.length - 1;
  
  while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (mid === 0) {
          return nums[0] > nums[1] ? 0 : 1;
      }
      if (nums[mid - 1] < nums[mid] && nums[mid + 1] < nums[mid]) {
          return mid;
      }
      if (nums[mid] < nums[mid + 1]) {
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }
  
  return high;
}

/*
  ANALYSIS:
    Runtime beats 97.78% of LeetCode solutions
    Time Complexity is O(logn);
    Space Complexity is O(1);

    The problem is just binary search with some conditions. The challenging part is arriving at the knowledge that binary search
    is possible. 

    From any given point in the array, you have the same considerations as you do to the right of index 0: 
      - The elements are increasing, meaning the last element is the peak
      - The elements are decreasing, meaning the left most element is the peak
      - the elements increase and then decrease, meaning the peak is the pivot
      - the elemends decrease and then increase, for which the problem states this is the same as option #2 

    These same possibilities exist to the left from a mid index in the array too. So if we take a mid index, if the right element
    is greater there will always exist a peak index to the right. If it's smaller, there will always be a peak index to the left.

    This problem is a great example of really analyzing the conditions given to you and seeing how they can inform your approach.
*/