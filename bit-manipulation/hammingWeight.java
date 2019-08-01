/**
 Input: 00000000000000000000000000001011
 Output: 3
 Explanation: 
 The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
 */

public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int res = 0;
        while (n != 0) {
            res++;
            n &= (n - 1);
        }
        return res;  
    }
}