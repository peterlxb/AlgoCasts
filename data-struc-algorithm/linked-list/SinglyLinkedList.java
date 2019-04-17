import com.sun.java.swing.action.NewAction;

/**
 * 单链表的插入、删除、查找操作 链表中存储int 类型的数据
 */
public class SinglyLinkedList {

  private Node head = null;

  // 根据值查找结点
  public Node findByValue(int value) {
    Node p = head;
    while (p != null && p.data != value) {
      p = p.next;
    }
    return p;
  }

  // 根据索引查找结点
  public Node findByIndex(int index) {
    Node p = head;
    int pos = 0;
    while (p != null && pos != index) {
      p = p.next;
      ++pos;
    }
    return p;
  }

  // 无头结点，链表头部插入
  public void insertToHead(int value) {
    Node newNode = new Node(value, null);
    insertToHead(NewNode);
  }

  public void insertToHead(Node newNode) {
    if (head == null) {
      head = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
  }

  //
  public void insertTail(int value) {
    Node newNode = new Node(value, null);
    //
    if (head == null) {
      head = newNode;
    } else {
      Node p = head;
      while (q.next != null) {
        q = q.next;
      }
      newNode.next = q.next;
      q.next = newNode;
    }
  }

  // Node 类
  public static class Node {
    private int data;
    private Node next;

    public Node(int data, Node next) {
      this.data = data;
      this.next = next;
    }

    public int getData() {
      return data;
    }
  }

  public static void main(String[] args) {
    System.out.println("Singly Linked List ");
  }

}