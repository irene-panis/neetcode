class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let ans = new Array(n * 2);

        for (let i = 0; i < 2 * n; i++) {
            ans[i] = nums[i % n];
        }

        return ans;
    }
}
