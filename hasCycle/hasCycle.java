
public class HasCycle {

    public static void main(String[] args) {
        System.out.println("reversrList start");
    }

    public static boolean hasCycle(ListNode head) {
        
      if (head == null) {
          return false;
      }
      // 通过两个快慢指针   
      ListNode fast = head.next;
      ListNode slow = head;
    
      while (fast != null && fast.next != null) {
          fast = fast.next.next;
          slow = slow.next;
        
          if (slow == fast) {
              return true;
          }
      }
      return false;
    }
}