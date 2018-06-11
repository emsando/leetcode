/*
  Given a collection of distinct integers, return all possible permutations.

  Example:

  Input: [1,2,3]
  Output:
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
*/

const permute = (nums) => {
  let n = nums.length;
  let result = []; 
  
  const buildOption = (option, remain) => {
      if (option.length === n) {
          result.push(option)
      }
      
      for (let i = 0; i < remain.length; i++) {
          let newOption = option.concat([remain[i]]);
          let newRemain = remain.slice(0, i).concat(remain.slice(i + 1)); 
          buildOption(newOption, newRemain);
      }
  }
  
  buildOption([], nums);
  return result;
};

/*
  ANALYSIS:
    Time complexity is O(n!)
    Space complexity is O(n!)
    Runtime beats 98.37% of LeetCode solutions
*/