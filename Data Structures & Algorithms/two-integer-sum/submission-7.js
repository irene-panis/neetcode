class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map(); // store value, index
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (seen.has(diff)) {
                return [i, seen.get(diff)];
            }
            seen.set(nums[i], i);
        }
    }
}
