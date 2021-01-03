import java.util.Deque;
import java.util.LinkedList;

/**
 * MaxSlidingWinow
*/
class Solution {

  /**
   * 
  Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
  Output: [3,3,5,5,6,7]
  Explanation: 
  Window position                Max
  ---------------               -----
  [1  3  -1] -3  5  3  6  7       3
  1 [3  -1  -3] 5  3  6  7       3
  1  3 [-1  -3  5] 3  6  7       5
  1  3  -1 [-3  5  3] 6  7       5
  1  3  -1  -3 [5  3  6] 7       6
  1  3  -1  -3  5 [3  6  7]      7
  */
  public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums == null || nums.length == 0) {
      return new int[0];
    }

    int[] res = new int[nums.length - k + 1];
    Deque<Integer> windows = new LinkedList<>();

    for (int i = 0; i < nums.length; ++i) {
      while (windows.size() > 0 && nums[i] >= nums[windows.getLast()]) {
        windows.removeLast();
      }

      windows.addLast(i);
      if (i - k + 1 >= 0 ) {
        res[i - k + 1] = nums[windows.getFirst()];
      }

      if (i - k + 1 >= windows.getFirst()) {
        windows.removeFirst();
      }
      
    }

    return res;
  }
}