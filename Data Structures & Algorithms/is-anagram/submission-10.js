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

        for (const char of s) {
            sMap.set(char, (sMap.get(char) ?? 0) + 1);
        }
        console.log('sMap', sMap);
        for (const char of t) {
            tMap.set(char, (tMap.get(char) ?? 0) + 1);
        }
        console.log('tMap', tMap);

        for (const [key] of sMap.entries()) {
            if (sMap.get(key) !== tMap.get(key)) {
                return false;
            }
        }   
        return true;

    }
}
