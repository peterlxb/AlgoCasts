/**
 * @param {string} s
 * @return {boolean}
 * 也是利用栈来匹配，匹配一个pop一个出去。最后栈为空则是有效的。
 *
 * Input: "()[]{}" Output: true
 */
var isValid = function(s) {
  let stack = [];
  const mapping = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < s.length; i++) {
    // 如果是右向的字符，取出栈顶元素进行比较
    if (s[i] in mapping) {
      const curr = stack.pop();
      // 这里 s[i] 是key ,mapping[s[i]] 获取到值，与 pop出来的栈顶元素进行比较
      if (mapping[s[i]] !== curr) {
        return false;
      }
    } else {
      // 不是右向元素，push到栈中
      stack.push(s[i]);
    }
  }
  return !stack.length;
};
