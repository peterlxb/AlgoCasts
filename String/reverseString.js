/**
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 *
 * Input: ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 */
var reverseString = function(s) {
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    // use ES6
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};
