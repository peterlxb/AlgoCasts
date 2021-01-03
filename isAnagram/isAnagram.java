/** 
 * 判断是否是有效的anagram 回文 
   Input: s = "anagram", t = "nagaram"
   Output: true

   Input: s = "rat", t = "car"
   Output: false
 */
public class IsAnagram {
    public boolean isAnagram(String s, String t) {
        // 使用hash table
        if (s.length() != t.length()) {
            return false;
        }
        
        int[] counter = new int[26];
        for (int i = 0; i < s.length(); i++) {
            counter[s.charAt(i) - 'a']++;
            counter[t.charAt(i) - 'a']--;
        }
        
        for (int count: counter) {
            if (count != 0) {
                return false;
            }
        }
        return true;
    }
}