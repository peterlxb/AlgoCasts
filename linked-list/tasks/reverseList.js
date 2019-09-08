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

var reverseList = function(head) {
  let current = head;
  let pre = null;

  while (current != null) {
    let next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }

  return pre;
};
