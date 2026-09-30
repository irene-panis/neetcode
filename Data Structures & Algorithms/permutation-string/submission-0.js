class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let l = 0;
        let counts1 = new Map();
        let counts2 = new Map();

        for (const char of s1) {
            counts1.set(char, (counts1.get(char) ?? 0) + 1);
        }

        for (let r = 0; r < s2.length; r++) {
            counts2.set(s2[r], (counts2.get(s2[r]) ?? 0) + 1);
            if (r - l + 1 > s1.length) {
                counts2.set(s2[l], counts2.get(s2[l]) - 1);

                if (counts2.get(s2[l]) === 0) {
                    counts2.delete(s2[l]);
                }

                l += 1;
            }
            if (r - l + 1 === s1.length) {
                let isMatch = true;
                for (const [char, count] of counts1) {
                    if (counts2.get(char) !== count) {
                        isMatch = false;
                        break;
                    }
                }
                if (isMatch) return true;
            }
        }
        return false;
    }
}
