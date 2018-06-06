/*
  Given a collection of intervals, merge all overlapping intervals.

  Example 1:

  Input: [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
  Example 2:

  Input: [[1,4],[4,5]]
  Output: [[1,5]]
  Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
*/

const merge = (intervals) => {
  intervals.sort((a, b) => a.start - b.start);
  
  let result = [];
  
  for (let i = 0; i < intervals.length; i++) {
      if (i === 0) {
          result.push(intervals[i]);
          continue;
      }
      let cur = intervals[i];
      let last = result[result.length - 1];
      if (cur.start <= last.end) {
          last.end = Math.max(cur.end, last.end);
      } else {
          result.push(cur);
      }
  }
  
  return result;
};

/*
  ANALYSIS:
    Time complexity is O(n);
    Space complexity is O(n);
    Runtime beats 98.98% of LeetCode solutions
*/