class Solution {
    public int mySqrt(int x) {
        if (x == 0 || x == 1) return x;
        int l = 1, r = x, res = 1;
         
        while (l <= r) {
           // 防止l和r太大溢出
            int m = l + (r-l) / 2;
            if (m == x / m ) {
                return m;
            } else if (m > x /m) {
               // m 大，右边左移
                r = m - 1;
            } else {
                l = m + 1;
                res = m;
            }
        }
        return res;
    }
}