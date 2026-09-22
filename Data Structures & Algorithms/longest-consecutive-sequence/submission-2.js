class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0; // highest count
        const numSet = new Set(nums); // create set of nums
        for (const num of numSet) { // iterate over nums
            if (!numSet.has(num - 1)) { // check if num has value below it; if not, it's the start of a sequence
                let count = 1; // init counter
                let currentNum = num; // init currentNum to current num
                while (numSet.has(currentNum + 1)) { // while numSet has next number run loop
                    currentNum += 1; // increase number we're looking for
                    count += 1; // increase counter
                }
                if (count > max) { // if counter exceeds max streak
                    max = count; // reassign max
                }
            } 
        }
        return max;
    }
}
