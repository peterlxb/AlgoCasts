/**
 * Definition for singly-linked list.

 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode cur = head;
        ListNode newHead = head.next;
        while (cur != null && cur.next != null) {
            // 用一个临时变量存储当前节点
            ListNode tmp = cur; 
            cur = cur.next;
            // 等价于下一个循环开始的节点 2n + 1 curr.next.next
            tmp.next = cur.next; 
            cur.next = tmp;
            // 下一次开始的 curr 节点
            cur = tmp.next;
            // 处理边界条件 基数或偶数
            if (cur != null && cur.next != null) tmp.next = cur.next;
        }
        return newHead;
    }
}