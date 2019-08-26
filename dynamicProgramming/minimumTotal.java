class Solution {
     public static int minimumTotal(List<List<Integer>> triangle) {
        int level = triangle.size();
        List<Integer> min = new ArrayList<>(triangle.get(level - 1));

        for(int i = level - 2; i >= 0; i--) {
            int len = triangle.get(i).size();

            for(int j = 0, k = 0; j < len && k < len; j++, k++) {
                int tmp = Math.min(min.get(k), min.get(k + 1)) + triangle.get(i).get(j);
                min.set(j, tmp);
            }
            
            min.remove(min.size() - 1); // 每次重置后，最后一个就不需要了
        }

        return min.get(0); 
    }
}