/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }

 Example:
  Input: head = [3,2,0,-4], pos = 1
  Output: tail connects to node index 1
  Explanation: There is a cycle in the linked list, where tail connects to the second node.

 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        if (head == null || head.next == null) {
            return null;
        }
        
        ListNode slow = head, fast = head, start = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow == fast) {
                while (slow != start) {
                    slow = slow.next;
                    start = start.next;
                }
                return start;
            }
        }
        return null;
    }
}