/*
  Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

  Note: 
  You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

  Example 1:
  Input: root = [3,1,4,null,2], k = 1
    3
    / \
  1   4
    \
    2
  Output: 1

  Example 2:
  Input: root = [5,3,6,2,4,null,null,1], k = 3
        5
        / \
      3   6
      / \
    2   4
    /
  1
  Output: 3

  Follow up:
  What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
  // smallest element will always be last this.left 
  // can implement in order with tracker 
  let tracker = 0;
  let result = null; 
  
  const traverse = (node) => {
      if (node === null || tracker === k) {
          return
      }
      
      if (node.left) {
          traverse(node.left);
      }
      tracker++
      if (tracker === k) {
          result = node.val;
          return
      }
      
      if (node.right) {
          traverse(node.right)
      }
  }
  
  traverse(root);
  
  return result;
};

/*
  ANALYSIS:
    Time complexity is O(n) where n is nodes in the tree
    Space complexity is O(1)
    Runtime beats 93.47% of LeetCode solutions
*/