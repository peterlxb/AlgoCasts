/**
 Input: [5,5,5,10,20]
 Output: true

 Input: [10,10]
 Output: false

 Input: [5,5,10,10,20]
 Output: false
 Explanation: 
  From the first two customers in order, we collect two $5 bills.
  For the next two customers in order, we collect a $10 bill and give back a $5 bill.
  For the last customer, we can't give change of $15 back because we only have two $10 bills.
  Since not every customer received correct change, the answer is false.
*/
 class Solution {
    public boolean lemonadeChange(int[] bills) {
        int five = 0, ten = 0;

        for (int i : bills) {
          if (i == 5) {
            // five直接加1,不用找零
            five++;
          } else if (i == 10) {
            // 10元找零，five减去1, ten加1
            five--;
            ten++;
          } else if (ten > 0) {
            // 第一种20情况，贪心算法，five和ten各减1
            ten--;
            five--;
          } else {
            // 第二种20情况，直接five减3
            five -= 3;
          }
          // five不够减 直接返回 false 
          if (five < 0) return false;
        }
        return true;
    }
}