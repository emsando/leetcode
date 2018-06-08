/*
  Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

  For example:
  Given binary tree [3,9,20,null,null,15,7],
      3
    / \
    9  20
      /  \
    15   7
  return its zigzag level order traversal as:
  [
    [3],
    [20,9],
    [15,7]
  ]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const zigzagLevelOrder = (root) => {
  if (!root) {
      return [];
  }
  let result = [[]];
  let resPtr = 0;
  let stacks = [[root], []];
  let stackPtr = 0;
  let dir = 0;

  while (stacks[stackPtr].length) {
      let curr = stacks[stackPtr].pop();
      result[resPtr].push(curr.val);
      if (dir % 2 === 0) {
          if (curr.left) {
              stacks[stackPtr + 1].push(curr.left);
          }
          if (curr.right) {
              stacks[stackPtr + 1].push(curr.right);
          }
      } else {
          if (curr.right) {
              stacks[stackPtr + 1].push(curr.right);
          }
          if (curr.left) {
              stacks[stackPtr + 1].push(curr.left);
          }
      }
      if (stacks[stackPtr].length === 0) {
          stacks.push([]);
          dir++;
          stackPtr++;
          result.push([]);
          resPtr++;
      }
  }
  
  result.pop();
  return result;
};

/*
  ANALYSIS:
    Time complexity is O(n) where n is number of nodes
    Space complexity is O(n) - we are storing values of all nodes 
      It's tempting to think that since we have the intermediate stacks plus the results array that space is > n
      However, stack nodes + result nodes is never greater than n
      Above technically we'll have logn empty stacks at the end, but this could be refactored so that there are only ever 
      2 stacks - the one we're popping off and the one we're pushing to. 
    Runtime beats 94.21% of LeetCode solutions
*/