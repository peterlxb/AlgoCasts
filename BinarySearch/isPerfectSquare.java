/**
 * 判断一个数是不是有平方squart
 Input: 16
 Output: true

 Input: 14
 Output: false

 不能用内置的sqrt
 */

class Solution {
  public boolean isPerfectSquare(int num) {
    // 使用二分查找
    int low = 1, high = num;
    while (low <= high) {
      long mid = (low + high) >>> 1;
      
      if (mid * mid == num) {
        return true;
      } else if (mid * mid < num) {
        low = (int) mid + 1;
      } else {
        high = (int) mid - 1;
      }
    }
    return false;
  }
}