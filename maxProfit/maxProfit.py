# -*- coding: utf-8 -*-

"""
使用贪心算法, 依次比较列表的相邻两个元素，如果后面的数大于前面的数，则买卖一次
对于 [7,1,5,3,6,4]
1，5可以倒卖获取利润4 
3，6可以倒卖获取利润3

对于[1,2,3,4,5]
每次倒卖获取利润1 最后总利润4
"""

class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        profit = 0
        for i, x in enumerate(prices):
            if i == len(prices) - 1: return profit
            # 遍历比较相邻两个数的值
            if x < prices[i+1]:
                profit += prices[i+1] - x
        return profit 

def main():
    prices = [7,1,5,3,6,4]
    ret = Solution().maxProfit(prices)
    print ret

if __name__ == '__main__':
    main()

      