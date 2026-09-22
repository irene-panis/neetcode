class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [1];
        for (let i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] * nums[i];
        }
        console.log(prefix);
        
        const suffix = new Array(nums.length + 1).fill(1);
        for (let i = nums.length - 1; i > 0; i--) {
            suffix[i - 1] = suffix[i] * nums[i];
        }
        console.log(suffix)

        const arr = [];
        for (let i = 0; i < nums.length; i++) {
            arr.push(prefix[i] * suffix[i]);
        }
        return arr;
    }
}
