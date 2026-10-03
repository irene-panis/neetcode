class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let counts = new Map();
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            counts.set(s[r], (counts.get(s[r]) ?? 0) + 1);
            const maxFreq = Math.max(...counts.values());
            while ((r - l + 1) - maxFreq > k) { // max reps > avail reps
                counts.set(s[l], counts.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1); // track max window size
        }
        return res;
    }
}
