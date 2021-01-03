/**
  Input [3,2,1,5,6,4] and k = 2
  ouput 5
  
  Input [3,2,3,1,2,4,5,5,6] and k = 4
  output 4

  assume k is always valid 1 <= k <= array's length
*/

public class FindKthLargest {

  final PriorityQueue<Integer> largeK = new PriorityQueue<Integer>(k + 1);
  final int k;

  public int findKthLargest(int[] nums, int k) {
      this.k = k;
      largeK = new PriorityQueue<>(k);

      for (int ele : nums) {
        largeK.add(ele);
        if (largeK.size() > k) {
          largeK.poll();
        }
      }

      return largeK.poll();
  }

}