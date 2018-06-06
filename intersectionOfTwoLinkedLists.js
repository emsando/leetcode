/*
  Write a program to find the node at which the intersection of two singly linked lists begins.


  For example, the following two linked lists:

  A:          a1 → a2
                    ↘
                      c1 → c2 → c3
                    ↗            
  B:     b1 → b2 → b3
  begin to intersect at node c1.


  Notes:

  If the two linked lists have no intersection at all, return null.
  The linked lists must retain their original structure after the function returns.
  You may assume there are no cycles anywhere in the entire linked structure.
  Your code should preferably run in O(n) time and use only O(1) memory.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === headB) {
      return headA;
  }
  if (!headA || !headB) {
      return null;
  }
  
  let tailA = null; 
  let tailB = null;
  
  let runA = headA;
  let runB = headB;
  
  while (!tailA || !tailB) {
      if (runA.next === null) {
          tailA = runA;
      }
      if (runB.next === null) {
          tailB = runB;
      }
      runA = runA.next || headB; // IMPORTANT! Set runners to heads of the OTHER list! 
      runB = runB.next || headA; // This guarantees they will meet on 2nd pass provided the lists are connected
  }
      
  if (tailA !== tailB) {
      return null;
  }
  
  while (runA !== runB) {
      runA = runA.next;
      runB = runB.next;
  }
  
  return runA;
};

/*
  ANALYSIS:
    Time complexity is O(A.len + B.len);
    Space complexity is O(1);
    Runtime beats 97.07% of LeetCode solutions
*/