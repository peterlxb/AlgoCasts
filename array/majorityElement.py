class Solution:
    def majorityElement(self, nums):
        nums.sort()
        return nums[len(nums) // 2]


def main():
    nums = [3,2,3]
    ret = Solution().majorityElement(nums)
    print(ret)

if __name__ == '__main__':
    main()
