class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const sMap = new Map();
        const tMap = new Map();

        for (const letter of s) {
            sMap.set(letter, (sMap.get(letter) ?? 0) + 1);
        }
        for (const letter of t) {
            tMap.set(letter, (tMap.get(letter) ?? 0) + 1);
        }

        for (const [letter] of sMap) {
            if (sMap.get(letter) !== tMap.get(letter)) return false;
        }
        return true;
    }
}
