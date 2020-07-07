/**
 * find the kth largest element in a stream.
 * 示例 
 int k = 3;
 int[] arr = [4,5,8,2];
 KthLargest kthLargest = new KthLargest(3, arr);
 kthLargest.add(3);   // returns 4
 kthLargest.add(5);   // returns 5
 kthLargest.add(10);  // returns 5
 kthLargest.add(9);   // returns 8
 kthLargest.add(4);   // returns 8

 可以假设nums大于 k-1 k大于等于1
 */

class KthLargest {
  // 使用优先级队列
  final PriorityQueue<Integer> q;
  final int k;

  public KthLargest(int k, int[] a) {
    this.k = k;
    q = new PriorityQueue<>(k);
    for (int n : a) {
      add(n);
    }
  }

  public int add(int n) {
    if (q.size() < k) {
      q.offer(n);
    } else if (q.peek() < n) {
      q.poll();
      q.offer(n);
    }
    return q.peek();
  }
}