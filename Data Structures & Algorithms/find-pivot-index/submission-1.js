class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const prefix = [nums[0]];
        for (let i = 1; i < nums.length; i++) {
            prefix.push(nums[i] + prefix[i - 1]);
        }
        for (let i = 0; i < prefix.length; i++) {
            if ((prefix[prefix.length - 1] - prefix[i] == (prefix[i - 1] ?? 0))) {
                return i;
            }
        }
        return -1;
    }
}
