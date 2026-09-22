class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * always removing from end of list = use stack
     * have to know which brackets to match = use map
     */
    isValid(s) {
        const stack = [];
        const map = {
            '}': '{',
            ']': '[',
            ')': '(',
        };

        for (const char of s) {
            const isBracket = char in map;
            if (!isBracket) {
                stack.push(char);
                continue;
            }

            const isEqual = stack[stack.length - 1] === map[char];
            if (isEqual) {
                stack.pop();
                continue;
            }

            return false;
        }

        return stack.length === 0;
    }
}
