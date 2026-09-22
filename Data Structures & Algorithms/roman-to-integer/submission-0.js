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
            if (i == s.length - 1) {
                numeral += map.get(s[i]);
            } else if (map.get(s[i]) < map.get(s[i + 1])) {
                const diff = map.get(s[i + 1]) - map.get(s[i]);
                numeral += diff;
                i++;
            } else {
                numeral += map.get(s[i]);
            }
        }
        return numeral;
    }
}
