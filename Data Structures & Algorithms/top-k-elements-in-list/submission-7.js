class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = new Map();
        for (const num of nums) {
            counts.set(num, (counts.get(num) ?? 0) + 1);
        }
        const sorted = [...counts].sort((a, b) => b[1] - a[1]);
        return sorted.slice(0, k).map(([val]) => val);
    }
}
