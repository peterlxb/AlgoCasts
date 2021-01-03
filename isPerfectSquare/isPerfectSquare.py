"""
判断一个数是不是有平方squart
 Input: 16
 Output: true

 Input: 14
 Output: false

 不能用内置的sqrt，使用二分查找法
""" 

class Solution(object):
    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        left = 0
        right = num

        while left <= right:
            mid = left + (right - left ) // 2
            if mid ** 2 == num:
                return True
            elif mid ** 2 > num:
                right = mid - 1
            else:
                left = mid + 1
        return False

 