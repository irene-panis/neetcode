class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mp = new Map();
        for (const string of strs) {
            const sorted = string.split('').sort().join("");
            if (!mp.has(sorted)) {
                mp.set(sorted, []);
            }
            mp.get(sorted).push(string);
        }
        return Array.from(mp.values());
    }
}
