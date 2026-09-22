class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b);
        const res = [];
        for (let i = 0; i < sorted.length; i++) {
            // this handles duplicate i values
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let l = i + 1;
            let r = sorted.length - 1;
            while (l < r) { 
                if (nums[l] + nums[r] + nums[i] > 0) {
                    r--;
                } else if (nums[l] + nums[r] + nums[i] < 0) {
                    l++;
                } else {
                    res.push([nums[l], nums[r], nums[i]]);
                    l++;
                    r--;
                    // handles duplicate r/l values
                    while ((l < r) && nums[l] == nums[l - 1]) {
                        l++;
                    }
                    while ((r > l) && nums[r] == nums[r + 1]) {
                        r--;
                    }
                }
            }
        }
        return res;
    }
}
