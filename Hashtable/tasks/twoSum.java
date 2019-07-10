/**
 * 两数之和
   Given nums = [2, 7, 11, 15], target = 9,

   因为 nums[0] + nums[1] = 2 + 7 = 9,
   返回 [0, 1].

   使用哈希表 hashMap 的查找是 O(1)，时间复杂度就是O(N)
 */

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i< nums.length; i++) {
            map.put(nums[i], i);
        }
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement) && map.get(complement) != i) {
                return new int[] {i, map.get(complement)}; 
            }
        }
        
        throw new IllegalArgumentException("No two sum solution");
    }
}