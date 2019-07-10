/**
 * 用JavaScript 实现三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
    return [];
  }
  let res = [];
  // 数组排序
  nums.sort(function(a, b) {
    return a - b;
  });
  console.log(nums);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left = left + 1;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right = right - 1;
        }
        (left += 1), (right -= 1);
      } else if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }
  }
  return [...res];
};

console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
