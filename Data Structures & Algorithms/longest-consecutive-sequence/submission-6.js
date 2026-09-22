class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let max = 0;

        for (const num of numSet) {
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let count = 1;
                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    count += 1;
                }
                if (count > max) {
                    max = count;
                }
            }
        }
        return max;
    }
}
