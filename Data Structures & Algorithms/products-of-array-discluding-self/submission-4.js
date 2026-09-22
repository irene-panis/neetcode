class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [1]; // declare prefix array
        for (let i = 1; i < nums.length; i++) { // iterate over nums
            prefix[i] = prefix[i - 1] * nums[i - 1]; // fill prefix array; prev product * prev number
        }

        let suffix = 1; // running suffix
        for (let i = nums.length - 1; i >= 0; i--) { // go backwards from end of array
            prefix[i] *= suffix; // modify prefix value of current i to * running suffix
            suffix *= nums[i]; // update running suffix *= current number
        }

        return prefix;
    }
}
