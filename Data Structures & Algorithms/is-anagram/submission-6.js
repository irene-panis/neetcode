class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const wordOne = new Map();
        const wordTwo = new Map();

        for (const letter of s) {
            wordOne.set(letter, (wordOne.get(letter) ?? 0) + 1);
        }

        for (const letter of t) {
            wordTwo.set(letter, (wordTwo.get(letter) ?? 0) + 1);
        }

        for (const [letter, count] of wordOne) {
            if (wordOne.get(letter) !== wordTwo.get(letter)) return false;
        }

        return true;
    }
}
