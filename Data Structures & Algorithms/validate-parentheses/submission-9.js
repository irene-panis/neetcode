class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            ']': '[',
            '}': '{',
            ')': '('
        };
        const stack = [];
        for (const char of s) {
            if (char == ']' || char == '}' || char == ')') {
                if (pairs[char] !== stack.pop()) return false;
            } else {
                stack.push(char);
            }
        }
        return stack.length == 0;
    }
}
