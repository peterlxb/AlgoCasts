import java.io.*;
import java.util.*;

// 利用Java 实现单链表
public class LinkedList {

  Node head; // 列表的首部

  // Linked list 结点
  // 这个方法定义成 static 这样 main()方法就能访问它
  static class Node {
    int data;
    Node next;

    // 构造器
    Node(int d) {
      data = d;
      next = null;
    }
  }

  // 用来插入一个结点的方法(类似push 插入到结点尾部)，返回一个链表
  public static LinkedList insert(LinkedList list, int data) {
    // 使用给定数据构建一个结点
    Node new_node = new Node(data);
    new_node.next = null;

    // 如果链表是空的，让新结点成为头结点
    if (list.head == null) {
      list.head = new_node;
    } else {
      // 开始遍历链表直到最后一个last 结点
      Node last = list.head;
      while (last.next != null) {
        last = last.next;
      }

      // 将新结点插入到最后位置
      last.next = new_node;
    }

    return list;
  }

  // 打印链表的方法
  public static void printList(LinkedList list) {
    Node currNode = list.head;

    System.out.print("LinkedList: ");

    // 遍历整个链表
    while (currNode != null) {
      // 打印当前结点的数据
      System.out.print(currNode.data + " ");

      // 开始下一个结点
      currNode = currNode.next;
    }
  }

  public static LinkedList deleteByKey(LinkedList list, int key) {
    Node currNode = list.head, prev = null;

    // Case1 如果要删除的是头结点
    if (currNode != null && currNode.data == key) {
      list.head = currNode.next;

      System.out.println(key + " found and deleted");

      return list;
    }

    // Case2 如果要删除的不在头结点
    // 搜索要删除的key 追踪它的前结点
    while (currNode != null && currNode.data != key) {
      prev = currNode;
      currNode = currNode.next;
    }

    if (currNode != null) {
      prev.next = currNode.next;
      System.out.println(key + " found and deleted");
    }

    // Case3 key 不存在
    if (currNode == null) {
      System.out.println(key + " not found");
    }

    return list;
  }

  public static void main(String[] args) {
    // 以一个空链表开始
    LinkedList list = new LinkedList();

    // 插入值
    list.insert(list, 1);
    list.insert(list, 2);
    list.insert(list, 3);
    list.insert(list, 4);
    list.insert(list, 5);
    list.insert(list, 6);
    list.insert(list, 7);
    list.insert(list, 8);

    // 打印值
    printList(list);

    //
    deleteByKey(list, 1);
    printList(list);
    deleteByKey(list, 4);
    printList(list);
    deleteByKey(list, 10);
    printList(list);
  }
}