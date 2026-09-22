class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [1];
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        let suffix = 1;
        for (let i = prefix.length - 1; i >= 0; i--) {
            prefix[i] *= suffix;
            suffix *= nums[i];
        }
        return prefix;
    }
}
