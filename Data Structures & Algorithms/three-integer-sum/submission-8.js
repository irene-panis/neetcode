class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = [];
        const sorted = nums.sort((a, b) => a - b);

        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] === sorted[i - 1]) continue;
            let l = i + 1;
            let r = sorted.length - 1;
            while (l < r) {
                if (sorted[i] + sorted[r] + sorted[l] > 0) {
                    r--;
                } else if (sorted[i] + sorted[r] + sorted[l] < 0) {
                    l++;
                } else {
                    res.push([sorted[i], sorted[r], sorted[l]]);
                    l++;
                    r--;
                    while (sorted[l] == sorted[l - 1]) {
                        l++;
                    }
                    while (sorted[r] == sorted[r + 1]) {
                        r--;
                    }
                }
            }
        }
        return res;
    }
}
