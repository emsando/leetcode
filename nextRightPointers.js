/*
  Given a binary tree

  struct TreeLinkNode {
    TreeLinkNode *left;
    TreeLinkNode *right;
    TreeLinkNode *next;
  }
  Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

  Initially, all next pointers are set to NULL.

  Note:

  You may only use constant extra space.
  Recursive approach is fine, implicit stack space does not count as extra space for this problem.
  You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
  Example:

  Given the following perfect binary tree,

      1
    /  \
    2    3
  / \  / \
  4  5  6  7
  After calling your function, the tree should look like:

      1 -> NULL
    /  \
    2 -> 3 -> NULL
  / \  / \
  4->5->6->7 -> NULL
*/

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connect = (root) => {
  if (root === null) {
      return
  }
  
  let current = root;
  let leftEdge = root;
  
  while (leftEdge.left) {
      while (current) {
          current.left.next = current.right;
          if (current.next) {
              current.right.next = current.next.left;
          }
          current = current.next;
      }
      leftEdge = leftEdge.left;
      current = leftEdge;
  }
};

/*
  ANALYSIS:
    Time complexity is O(n) where n is nodes in the tree
    Space complexity is O(1)
    Runtime beats 100% of LeetCode solutions
*/