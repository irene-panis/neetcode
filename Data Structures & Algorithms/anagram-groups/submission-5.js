class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
        for (const str of strs) {
            const sorted = str.split('').sort().join('');
            if (!groups.get(sorted)) {
                groups.set(sorted, []);
            }
            groups.get(sorted).push(str);
        }
        return [...groups.values()];
    }
}
