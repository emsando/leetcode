/*
  Given preorder and inorder traversal of a tree, construct the binary tree.

  Note:
  You may assume that duplicates do not exist in the tree.

  For example, given

  preorder = [3,9,20,15,7]
  inorder = [9,3,15,20,7]
  Return the following binary tree:

      3
    / \
    9  20
      /  \
    15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) {
      return null;
  }
  
  let indices = {}
  for (let i = 0; i < inorder.length; i++) {
      indices[inorder[i]] = i;
  }
  // root node is preorder[0];
  let root = new TreeNode(preorder[0]);
  let stack = [root];
  
  for (let i = 1; i < preorder.length; i++) {
      let value = preorder[i];
      let node = new TreeNode(value);
      
      if (indices[value] < indices[stack[stack.length - 1].val]) {
          // node is on left
          stack[stack.length - 1].left = node;
      } else {
          // node is on right
          let parent = null;
          while (stack.length && indices[value] > indices[stack[stack.length - 1].val]) {
              parent = stack.pop();
          }
          parent.right = node;
      }
      
      stack.push(node);
  }
  
  return root;
};

/*
  ANALYSIS:
    Time complexity is O(n)
    Space complexity is O(n)
    Runtime beats 97.74% of LeetCode solutions
*/