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
            if (char == '(' || char == '{' || char == '[') {
                stack.push(char);
            } else if (pairs[char] !== stack.pop()) {
                return false;
            }
        }
        return stack.length == 0;
    }
}
