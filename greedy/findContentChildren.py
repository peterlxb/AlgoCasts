# -*- coding: utf-8 -*-

"""
Input: [1,2,3], [1,1]

Output: 1 三个小孩，只能满足一个

Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.

Input: [1,2], [1,2,3]

Output: 2 两个小孩都能满足

"""


class Solution(object):
    def findContentChildren(self, g, s):
        g.sort()
        s.sort()

        childi = 0
        cookiei = 0

        while cookiei < len(s) and childi < len(g):
            if s[cookiei] >= g[childi]:
                childi +=1
            cookiei += 1
        return childi

def main():
    g=[1,2,3]
    s=[1,1]
    ret = Solution().findContentChildren(g, s)
    print ret

if __name__ == '__main__':
    main() 
