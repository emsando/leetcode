/*
  Given a linked list, swap every two adjacent nodes and return its head.

  Example:

  Given 1->2->3->4, you should return the list as 2->1->4->3.
  Note:

  Your algorithm should use only constant extra space.
  You may not modify the values in the list's nodes, only nodes itself may be changed.
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
var swapPairs = function(head) {
  if (!head) {
      return head
  }
  const dummy = new ListNode('dummy');
  dummy.next = head; 
  
  let cur = dummy;
  let p1 = cur.next;
  let p2 = p1.next
  
  while (cur && p1 && p2) {
      cur.next = p2;
      p1.next = p2.next;
      p2.next = p1;
      
      cur = p1;
      p1 = cur.next;
      p1 ? p2 = p1.next : false;
  }
  
  return dummy.next;
};

/*
  ANALYSIS:
    Time complexity is O(n)
    Space complexity is O(1)
*/