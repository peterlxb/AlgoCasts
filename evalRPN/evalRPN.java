/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/

 * Input: ["2", "1", "+", "3", "*"]
   Output: 9
   Explanation: ((2 + 1) * 3) = 9

   Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
   Output: 22
   Explanation: 
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 */

class Solution {
    public int evalRPN(String[] tokens) {
        int a,b;
		    Stack<Integer> S = new Stack<Integer>();
        
		    for (String s : tokens) {
			    if(s.equals("+")) {
				    S.add(S.pop()+S.pop());
			    }
			    else if(s.equals("/")) {
				    b = S.pop();
				    a = S.pop();
				    S.add(a / b);
			    }
			    else if(s.equals("*")) {
				   S.add(S.pop() * S.pop());
			    }
			    else if(s.equals("-")) {
				   b = S.pop();
				   a = S.pop();
				   S.add(a - b);
			    }
			   else {
				   S.add(Integer.parseInt(s));
			   }
		  }	
		  return S.pop();
    }
}