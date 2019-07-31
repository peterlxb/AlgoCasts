/**
  卖股票问题
  Best Time to Buy and Sell Stock II
 
  Input: [7,1,5,3,6,4]
  Output: 7
  Explanation: 
    Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
    Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 */
 class Solution {
    public int maxProfit(int[] prices) {
        if (prices.length == 0)
            return 0;
            
        int maxprofit = 0;
        
        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1])
                maxprofit += prices[i] - prices[i - 1];
        }
        return maxprofit;
    }
}