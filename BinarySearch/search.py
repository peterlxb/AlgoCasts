class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int] 
        :type target: int
        :rtype int
        """
        left, right = 0, len(nums) - 1
        while left <= right:
            middle = (right + left ) // 2
            if nums[middle] == target:
                return middle
            else:
                if target < nums[middle]:
                    right = middle - 1
                else:
                    left = middle + 1
        return -1

def main():
    nums = [-1,0,3,5,9,12]
    ret = Solution().search(nums, 9)
    print(ret)


if __name__ == '__main__':
    main()