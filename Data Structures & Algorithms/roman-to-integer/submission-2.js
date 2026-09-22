class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
        const map = new Map([
            ['I', 1],
            ['V', 5],
            ['X', 10],
            ['L', 50],
            ['C', 100],
            ['D', 500],
            ['M', 1000],
        ]);
        let numeral = 0;
        for (let i = 0; i < s.length; i++) {
            const current = map.get(s[i]);
            const next = map.get(s[i + 1]);
            if (current < next) {
                numeral -= current;
            } else {
                numeral += current ?? 0;
            }
        }
        return numeral;
    }
}
