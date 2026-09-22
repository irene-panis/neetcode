class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const newmap = new Map();
        for (const num of nums) {
            if (newmap.get(num)) return true;
            newmap.set(num, 1);
        }
        return false;
    }
}
