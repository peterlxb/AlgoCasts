/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
  // 暴力解法 不可取，时间复杂度 O(N^2)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == target - nums[i]) {
        return [i, j];
      }
    }
  }
};

/**
 * 使用ES6 Map实现两数之和
 */
var twoSum = function(nums, target) {
  map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    // 在 Map 中查找 complement ，hashMap的查找效率很高，时间复杂度O(1)
    let complement = target - nums[i];
    if (map.has(complement) && map.get(complement) != i) {
      return [i, map.get(complement)];
    }
  }

  throw Error("No two sum solution");
};

console.log(twoSum([1, 2, 3], 4));
