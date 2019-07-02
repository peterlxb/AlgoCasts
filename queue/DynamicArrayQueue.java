/**
 * 动态数组队列
 */

public class DynamicArrayQueue {

  private String[] items;
  private int n = 0;

  // head 表示队列头下标，tail 表示队尾下标
  private int head = 0;
  private int tail = 0;

  public DynamicArrayQueue(int capacity) {
    items = new String[capacity];
    n = capacity;
  }

  // 入队操作，将item 放入队尾
  public boolean enqueue(String item) {
    // tail==n 表示队列末尾没有空间了
    if (tail == n) {
      // tail==n && head==0 表示整个队列都占满了
      if (head == 0) {
        return false;
      }

      for (int i = head; i < tail; ++i) {
        items[i - head] = items[i];
      }

      tail -= head;
      head = 0;
    }

    items[tail] = item;
    tail++;
    return true;
  }

  // 出队操作
  public String dequeue() {
    if (head == tail)
      return null;

    String ret = items[head];
    ++head;
    return ret;
  }

  public void printAll() {
    for (int i = head; i < tail; ++i) {
      System.out.print(items[i] + " ");
    }
    System.out.println();
  }
}