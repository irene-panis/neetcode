class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        const substring = new Set();
        let max = 0;

        for (let r = 0; r < s.length; r++) {
            if (substring.has(s[r])) {
                while (substring.has(s[r])) {
                    substring.delete(s[l]);
                    l++;
                }
            }
            substring.add(s[r]);
            max = Math.max(max, substring.size);
        }
        return max;
    }
}
