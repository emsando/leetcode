/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const twoSum = (nums, target) => {
  // hash table solution
  let table = {};
    
  for (var i = 0; i < nums.length; i++) {
      table[nums[i]] = i;
  }
  
  for (var i = 0; i < nums.length; i++) {
      let lookUp = target - nums[i];
      let lookUpIndex = table[lookUp]; 
      if (table[lookUp] && lookUpIndex != i) {
          return [i, lookUpIndex]
      }
  }
}

/*
  ANALYSIS:
    Time complexity is O(n)
    Space complexity is O(n)
    Runtime beats 95% of LeetCode solutions
*/
