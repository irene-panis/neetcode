class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let length = 0;
        let substring = new Set();
        for (let r = 0; r < s.length; r++) {
            if (substring.has(s[r])) {
                while (substring.has(s[r])) {
                    substring.delete(s[l]);
                    l++;
                }
                substring.add(s[r]);
            } else {
                substring.add(s[r]);
            }
            length = Math.max(length, substring.size);
        }
        return length;
    }
}
