class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
        for (const string of strs) {
            const sorted = string.split('').sort().join('');
            if (!groups.has(sorted)) {
                groups.set(sorted, []);
            }
            groups.get(sorted).push(string);
        }
        return Array.from(groups.values());
    }
}
