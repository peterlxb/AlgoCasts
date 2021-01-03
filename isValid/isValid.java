/**
 * 给定一个只包含 '(', ')', '{', '}', '[' 和 ']'的字符串,
 * 判断是不是合法的, 这道题主要用到栈来实现 先进后出 
 * 思路是将 "(" "{" "[" push 到栈中，然后根据")" "}" "]" 从栈* * 中 pop顶层元素

 * Input: "()" Output: true
 * Input: "()[]{}" Output: true
 * Input: "(]" Output: false 
 * Input: "([)]" Output: false
 * Input: "{[]}" Output: true
 */

class Solution {
    public boolean isValid(String s) {
        // s 为空，或者为奇数，return false
        if (s == null || s.length() % 2 == 1) {
            return false;
        }
        
        // 定义一个 stack
        Stack<Character> stack = new Stack<>();
        
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '[' || c == '{' || c == '(') {
                // 如果字符是左向的，push到栈中
                stack.push(c);
            } else {
                // 栈为空，且这个字符是右向，返回false
                if (stack.isEmpty()) {
                    return false;
                } else if(c == ']' && stack.pop() != '[') { 
                  // 匹配 "[" 与 "]" 匹配就pop顶层元素
                    return false;
                } else if (c == '}' && stack.pop() != '{') { 
                    return false;
                } else if (c == ')' && stack.pop() != '(') {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}