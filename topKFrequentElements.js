/* 
  Given a non-empty array of integers, return the k most frequent elements.

  For example,
  Given [1,1,1,2,2,3] and k = 2, return [1,2].

  Note: 
  You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
  Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

const topKFrequent = (nums, k) => {
  let counts = {};
  nums.forEach(num => counts[num] = (counts[num] || 0) + 1);

  let arr = [];
  for (num in counts) {
      arr.push({'num': num, 'count': counts[num]});
  }
  arr.sort((a, b) => b.count - a.count);

  let result = arr.slice(0, k);
  return result.map(obj => Number(obj.num));
};

/*
  ANALYSIS:
    Runtime beats 100% of LeetCode solutions
    Time Complexity is O(nlogn);
    Space Complexity is O(n)
*/

const topKFrequent = (nums, k) => {
  let bucket = new Array(nums.length + 1); 
  let counts = {}; 
  
  nums.forEach(num => counts[num] = (counts[num] || 0) + 1);
  
  for (num in counts) {
      let count = counts[num];
      if (bucket[count] === undefined) {
          bucket[count] = [];
      }
      bucket[count].push(Number(num));
  };
  
  let result = [];
  let index = bucket.length - 1;
  
  while (result.length < k) {
      if (bucket[index] === undefined || bucket[index].length === 0) {
          index--;
          continue;
      }
      result.push(bucket[index].pop());
  }
  
  return result;
};

/*
  ANALYSIS:
    Runtime beats 100% of LeetCode solutions
    Time Complexity is O(n);
    Space Complexity is O(2n);

    This is faster than the first solution in cases where nums.length > 4 (so almost all), but it requires double the space
*/