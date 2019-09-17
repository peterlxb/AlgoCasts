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
            # 头结点每次指向下一个结点
            head = head.next
            cur.next = prev
            "最后要移动prev 指向上一次的头结点，也就是第一行的cur = head"
            prev = cur
        return prev