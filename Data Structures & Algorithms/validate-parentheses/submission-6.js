class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const hash = { '(': ')', '[': ']', '{': '}'}; // matching pairs
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
                stack.push(s[i]);
            } else if (hash[stack.pop()] !== s[i]) {
                return false;
            }
        }
        return stack.length === 0;
    }
}
