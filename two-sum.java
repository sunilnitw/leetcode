class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hash = new HashMap<Integer, Integer>();
        int sol[] = new int[2];
        for(int i=0; i<nums.length; i++){
            if(hash.containsKey(nums[i])){
                sol[0] = hash.get(nums[i]);
                sol[1] = i;
                break;
            } else{
                hash.put((target-nums[i]), i);
            }
            // System.out.println(hash);
        }
        return sol;
    }
}
