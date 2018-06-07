/*
  Given a binary tree, return the inorder traversal of its nodes' values.

  Example:

  Input: [1,null,2,3]
    1
      \
      2
      /
    3

  Output: [1,3,2]
  Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */

// RECURSIVE SOLUTION
const inorderTraversalRecursive = (root) => {
  if (!root) {
      return [];
  }
  
  let returnArray = [];
  
  const traverse = (node) => {
      if (node.left) {
          traverse(node.left);
      }
      returnArray.push(node.val);
      if (node.right) {
          traverse(node.right);
      }
  }
  traverse(root);
  
  return returnArray;
};

/*
  ANALYSIS:
    Time complexity is O(n) where n is number of nodes
    Space complexity is O(n) - we are storing and then printing values of all nodes
    Runtime beats 100% of LeetCode solutions
*/

// ITERATIVE SOLUTION
const inorderTraversalIterative = (root) => {
  if (!root) {
      return [];
  }
  
  let returnArray = [];
  
  let stack = [root];
  let current = root;
  
  while (stack.length) {
      if (current.left) {
          stack.push(current);
          current = current.left;
          continue;
      }
      returnArray.push(current.val);
      if (current.right) {
          current = current.right;
          continue;
      } 
      current = stack.pop();
      current.left = null;
  }
  
  return returnArray;
};

/*
  ANALYSIS:
    Time complexity is O(n) where n is number of nodes
    Space complexity is O(n) - we are storing and then printing values of all nodes
    Runtime beats 100% of LeetCode solutions
*/