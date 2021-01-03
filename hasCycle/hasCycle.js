/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  // 每次循环， fast跑两次 slow跑一次
  while (true) {
    // fast is null
    if (fast === null) {
      return false;
    }

    // 快指针第二个结点为空
    fast = fast.next;
    if (fast === null) {
      return false;
    }

    fast = fast.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
};