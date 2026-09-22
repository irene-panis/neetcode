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
                let counter = 1;
                let currentNum = num;
                while (numSet.has(currentNum + 1)) {
                    counter++;
                    currentNum++;
                }
                if (counter > max) {
                    max = counter;
                }
            }
        }
        return max;
    }
}
