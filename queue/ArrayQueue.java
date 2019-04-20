/**
 * 用数组实现队列
 */

public class ArrayQueue {
  // 数组items 大小为n
  private String[] items;
  private int n = 0;
  // head 表示队头下标 tail 表示队尾下标
  private int head = 0;
  private int tail = 0;

  // 初始化一个大小为 capacity 的数组
  public ArrayQueue(int capacity) {
    items = new String[capacity];
    n = capacity;
  }

  // 入队
  public boolean enqueue(String item) {
    // tail=n 表示队列满了
    if (tail == n)
      return false;
    items[tail] = item;
    ++tail;
    return true;
  }

  // 出队
  public String dequeue() {
    // head=tail 表示队列为空
    if (head = tail)
      return null;

    String ret = items[head];
    ++head;
    return ret;
  }

  public void printAll() {
    for (int i = 0; i < tail; i++) {
      System.out.println(items[i] + "");
    }
    System.out.println("");
  }
}