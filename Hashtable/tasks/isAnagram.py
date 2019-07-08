class Solution(object):
    # python 两种解法
    def isAnagram1(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        dic1, dic2 = {}, {}
        for item in s:
            dic1[item] = dic1.get(item, 0) + 1
        for item in t:
            dic2[item] = dic2.get(item, 0) + 1
        return dic1 == dic2
    
    def isAnagram(self, s, t):
        dic1, dic2= [0]*26, [0]*26
        
        for item in s:
            dic1[ord(item) - ord('a')] += 1
        for item in t:
            dic2[ord(item) -ord('a')] += 1
        return dic1 == dic2