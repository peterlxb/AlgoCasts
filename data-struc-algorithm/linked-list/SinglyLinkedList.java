
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
  // 这种操作与输入的顺序相反，逆序
  public void insertToHead(int value) {
    Node newNode = new Node(value, null);
    insertToHead(newNode);
  }

  public void insertToHead(Node newNode) {
    // 头结点为空，新结点就为头结点
    if (head == null) {
      head = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
  }

  // 顺序插入，链表尾部插入
  public void insertTail(int value) {
    Node newNode = new Node(value, null);
    // 空链表，可以插入新结点作为新head, 也可以不操作
    if (head == null) {
      head = newNode;

    } else {
      // 非空链表，从头结点开始循环找到最后一个结点(next 指向为空的那个结点)
      Node q = head;
      while (q.next != null) {
        q = q.next;
      }
      newNode.next = q.next;
      // 原链表的尾节点指向这个新结点
      q.next = newNode;
    }
  }

  // 在给定结点之后插入新结点
  public void insertAfter(Node p, int value) {
    Node newNode = new Node(value, null);
    insertAfter(p, newNode);
  }

  public void insertAfter(Node p, Node newNode) {
    if (p == null)
      return;

    newNode.next = p.next;
    p.next = newNode;
  }

  // 在给定结点前面插入新结点
  public void insertBefore(Node p, int value) {
    Node newNode = new Node(value, null);
    insertBefore(p, newNode);
  }

  public void insertBefore(Node p, Node newNode) {
    if (p == null)
      return;
    // 如果是头结点，直接调用 insertToHead
    if (head == p) {
      insertToHead(newNode);
      return;
    }

    // 从头结点开始遍历，直到找到这个 p结点的前一个结点
    Node q = head;
    while (q != null && q.next != p) {
      q = q.next;
    }

    if (q == null) {
      return;
    }

    // q 是 p 的前一个结点，将q 的 next 指针指向新结点
    newNode.next = p;
    q.next = newNode;
  }

  // 根据结点Node 删除链表中的值
  public void deleteByNode(Node p) {
    if (p == null || head == null)
      return;

    // 如果要删除的 p 结点是头结点，将头结点指向 p的下一个结点
    if (p == head) {
      head = head.next;
      return;
    }

    // p 不是头结点，从头结点开始遍历找到 p的前一个结点
    Node q = head;
    while (q != null && q.next != p) {
      q = q.next;
    }

    if (q == null) {
      return;
    }
    // 原 q.next 指向p ,删除 p 后指向p.next
    q.next = q.next.next;
  }

  // 根据值来删除链表中的结点
  public void deleteByValue(int value) {
    if (head == null)
      return;

    Node p = head;
    Node q = null;
    // p 指向头结点，从头结点开始遍历 找到q q->next = p
    while (p != null && p.data != value) {
      q = p;
      p = p.next;
    }

    if (p == null)
      return;
    // q=null 表明要删除的是头结点
    if (q == null) {
      head = head.next;
    } else {
      q.next = q.next.next;
    }
  }

  public void printAll() {
    Node p = head;
    while (p != null) {
      System.out.println(p.data + " ");
      p = p.next;
    }
    System.out.println();
  }

  // 判断 true or false
  public boolean TFResult(Node left, Node right) {
    Node l = left;
    Node r = right;

    System.out.println("left_:" + l.data);
    System.out.println("right_:" + r.data);

    while (l != null && r != null) {
      if (l.data == r.data) {
        l = l.next;
        r = r.next;
        continue;
      } else {
        break;
      }
    }

    System.out.println("Results:");
    if (l == null && r == null) {
      System.out.println("Results:");
      return true;
    } else {
      return false;
    }

  }

  // 判断是否为回文
  public boolean palindrome() {
    if (head == null) {
      return false;
    } else {
      System.out.println("开始执行找到中间结点");

      Node p = head;
      Node q = head;
      if (p.next == null) {
        System.out.println("只有一个元素");
        return true;
      }

      while (q.next != null && q.next.next != null) {
        p = p.next;
        q = q.next.next;
      }

      System.out.println("中间结点" + p.data);
      System.out.println("开始执行奇数结点的回文判断");

      Node leftLink = null;
      Node rightLink = null;
      if (q.next == null) {
        // p 一定为整个链表的中点，且结点数为奇数
        rightLink = p.next;
        leftLink = inverseLinkedList(p).next;
        System.out.println("左边第一个结点" + leftLink.data);
        System.out.println("右边第一个结点" + rightLink.data);

      } else {
        // p q 均为中点
        rightLink = p.next;
        leftLink = inverseLinkedList(p);

      }
      return TFResult(leftLink, rightLink);
    }
  }

  // 带结点的链表翻转
  public Node inverseLinkedList_head(Node p) {
    // Head 为新建的一个头结点
    Node Head = new Node(9999, null);
    // p 为原来整个链表的头结点，现在Head 指向整个链表
    Head.next = p;

    /**
     * 带头结点的链表翻转等价于从第二个元素开始 重新建立链表
     */
    Node Curr = p.next;
    p.next = null;
    Node next = null;

    while (Curr != null) {
      next = Curr.next;
      Curr.next = Head.next;
      Head.next = Curr;
      System.out.println("first " + Head.data);

      Curr = next;
    }

    // 返回左半部分的中点之前的那个结点
    return Head;
  }

  // 无头结点的链表翻转
  public Node inverseLinkedList(Node p) {

    Node pre = null;
    Node r = head;
    System.out.println("--" + r.data);
    Node next = null;

    while (r != p) {
      next = r.next;
      r.next = pre;
      pre = r;
      r = next;
    }

    r.next = pre;
    // 返回左半部分的中点之前的那个结点
    return r;
  }

  public static Node createNode(int value) {
    return new Node(value, null);
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
    System.out.println("SinglyLinkedList ");
    SinglyLinkedList link = new SinglyLinkedList();

    int data[] = { 1, 2, 3, 4, 5 };

    for (int i = 0; i < data.length; i++) {
      link.insertTail(data[i]);
    }

    System.out.println("打印原始: ");
    link.printAll();

    if (link.palindrome()) {
      System.out.println("回文");
    } else {
      System.out.println("不是回文");
    }
  }

}