/**
 * 找到出现次数最多的元素，要超过n/2 次
   Input: [2,2,1,1,1,2,2]
   Output: 2
 */

class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        return nums[nums.length/2];
    }

    // Boyer-Moore Voting Algorithm
    public int majorityElement1(int[] nums) {
        int count = 0;
        // 维护一个 candidate 用来指代要查找的值
        Integer candidate = null;
        
        // 遍历
        for (int num : nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }
        
        return candidate;
    }
}