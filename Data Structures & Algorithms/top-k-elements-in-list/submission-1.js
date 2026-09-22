class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mp = new Map();
        for (const num of nums) {
            mp.set(num, (mp.get(num) ?? 0) + 1);
        }
        const entries = Array.from(mp.entries());
        const sorted = entries.sort((a, b) => b[1] - a[1]);
        return sorted.slice(0, k).map(([num]) => num);
    }
}
