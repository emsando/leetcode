/*
  Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

  Formally the function should:
  Return true if there exists i, j, k 
  such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
  Your algorithm should run in O(n) time complexity and O(1) space complexity.

  Examples:
  Given [1, 2, 3, 4, 5],
  return true.

  Given [5, 4, 3, 2, 1],
  return false.
*/

const increasingTriplet = (nums) => {
  let min0 = Infinity;
  let min1 = Infinity;
  
  for (num of nums) {
      if (num <= min0) {
          min0 = num;
      } else if (num <= min1) {
          min1 = num;
      } else {
          return true;
      }
  }
  
  return false;
};

/*
  ANALYSIS:
    Time complexity is O(n)
    Space complexity is O(1)
    Runtime beats 91.55% of LeetCode solutions

    The tricky part about this problem is that it's actually easier than you might first think. You don't have to worry about
    tracking indexes actually, which makes it simpler. It doesn't matter that at the end of the function, min0 may actually be set
    to a value that doesn't appear in the actual subsequence - if you reach the return true block, it means there is a valid ordering.
*/