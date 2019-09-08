# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        prev = None
        while head:
            """
            保存 head 和 head.next 的引用
            """
            cur = head
            head = head.next
            cur.next = prev
            "最后要移动prev"
            prev = cur
        return prev