/**
 * 三数之和 利用HashSet
 * 给定一个数组 nums = [-1, 0, 1, 2, -1, -4],

 * 一个解答方案是:
 * [
    [-1, 0, 1],
    [-1, -1, 2]
 * ] 
*/

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // 定义一个集合 集合里面没有重复的元素
        Set<List<Integer>> res = new HashSet<>();
        // 没有3个数，直接返回空数组列表
        if (nums.length < 3) {
            return new ArrayList<>();
        }
        // 对数组排序
        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 2; i++) {
            int j = i + 1; // 第二个位置开始
            int k = nums.length - 1; // 最后一个元素
            
            while (j < k) {
                int sum = nums[i] + nums[j] + nums[k];
                
                if (sum == 0) {
                    // 使用后++ -- ,运算后再加或者减
                    res.add(Arrays.asList(nums[i], nums[j++], nums[k--]));
                } else if (sum > 0) { // 三数之和大于0，k要变小(nums[j] 已经是最小)
                    k--;
                } else if (sum < 0) { // 三数之和小于0，j变大
                    j++;
                }
            }
        }
        return new ArrayList<>(res);
    }
}