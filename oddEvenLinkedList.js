/*
  Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

  You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

  Example 1:

  Input: 1->2->3->4->5->NULL
  Output: 1->3->5->2->4->NULL
  Example 2:

  Input: 2->1->3->5->6->4->7->NULL
  Output: 2->3->6->7->1->5->4->NULL
  Note:

  The relative order inside both the even and odd groups should remain as it was in the input.
  The first node is considered odd, the second node even and so on ...
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const oddEvenList = (head) => {
  if (!head || !head.next) {
      return head;
  }
  
  let evenHead = head.next;
  let next = head.next
  let node = head;
  let count = 1;
  
  while (node.next.next) {
      next = node.next
      node.next = node.next.next;
      node = next;
      count++;
  }
  
  if (count % 2 === 0) {
      node.next.next = evenHead;
      node.next = null;
  } else {
      node.next = evenHead;   
  }
  
  return head;
};

/*
  ANALYSIS:
    Time complexity is O(n);
    Space complexity is O(1);
    Runtime beats 95.05% of LeetCode solutions
*/