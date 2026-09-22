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
            if (i == s.length - 1) {
                numeral += current;
            } else if (current < next) {
                const diff = next - current;
                numeral += diff;
                i++;
            } else {
                numeral += current;
            }
        }
        return numeral;
    }
}
