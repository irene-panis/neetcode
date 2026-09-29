class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        const letters = new Map();
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            letters.set(s[r], (letters.get(s[r]) ?? 0) + 1);
            while (((r - l + 1) - Math.max(...letters.values())) > k) {
                letters.set(s[l], (letters.get(s[l]) ?? 0) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
