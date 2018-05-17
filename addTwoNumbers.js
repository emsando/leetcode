/* 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807
*/

const addTwoNumbers = function(l1, l2) {
  let head = new ListNode('ignore');
  let tail = head;
  let carry = 0;
  while(l1 || l2) {
      if (!l1) {
          val = l2.val;
      } else if (!l2) {
          val = l1.val
      } else {
          val = l1.val + l2.val
      }
      val = val + carry;
      carry = 0;
      if (val > 9) {
          val = val - 10;
          carry = 1;
      }
      tail.next = new ListNode(val);
      tail = tail.next;
      
      if (l1) {
         l1 = l1.next; 
      }
      if (l2) {
          l2 = l2.next
      }
  }
  
  if (carry === 1) {
      tail.next = new ListNode(carry);
  }
  
  return head.next;
};

/*
  ANALYSIS:
    Time complexity is O(n)
    Space complexity is O(n)
    Runtime beats 96.15% of LeetCode solutions
*/