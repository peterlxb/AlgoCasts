/**
 Definition for singly-linked list.
  public class ListNode {
      int val;
      ListNode next;
      ListNode(int x) { val = x; }
  }

 Input: 1->2->3->4->5->NULL
 Output: 5->4->3->2->1->NULL
 */
public class ReverseList {

    public static void main(String[] args) {
        System.out.println("reversrList start");
    }

    public ListNode reverseList(ListNode head) {
        ListNode curr = head, pre = null;
        
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
        }
        
        return pre;
    }
}

 class ListNode {
     int val;
     ListNode next;
     ListNode(int x) { val = x; }
 }


