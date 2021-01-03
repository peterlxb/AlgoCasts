class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.

        用ES6 的语法 的 python解法
        """
        i = 0
        j = len(s) -1
        while i < j:
            [s[i], s[j]] = [s[j], s[i]]
            i = i + 1
            j = j -1
            