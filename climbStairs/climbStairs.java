/**
 * Input: 2
   Output: 2
   Explanation: There are two ways to climb to the top.
   1. 1 step + 1 step
   2. 2 steps

   这里面可以一阶直接上到最顶，或者两阶直接上到最顶，DP 递推方程变成 f(n) = f(n-1) + f(n-2)
   最后就是一个斐波拉起数列的问题
 */

class Solution {
    public int climbStairs(int n) {
        if (n == 0 || n == 1 || n == 2) { return n;}
        
        int[] mem = new int[n];
        mem[0] = 1;
        mem[1] = 2;
        
        for (int i = 2; i < n; i++) {
            mem[i] = mem[i - 1] + mem[i - 2];
        }
        return mem[n-1];
    }
}