class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let max = 0;

        for (const num of numSet) {
            let currentNum = num;
            let counter = 1;
            if (!numSet.has(num - 1)) {
                while (numSet.has(currentNum + 1)) {
                    counter += 1;
                    currentNum += 1;
                }
            }
            if (counter > max) {
                max = counter;
            }
        }
        return max;
    }
}
