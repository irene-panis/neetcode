class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (nums[mid] > nums[r]) {
                l = mid + 1;
            } else if (nums[mid] <= nums[r]) {
                r = mid;
            } else {
                return nums[mid];
            }
        }
        return nums[l];
    }
}
