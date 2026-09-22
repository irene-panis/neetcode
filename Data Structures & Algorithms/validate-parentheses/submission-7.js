class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const parentheses = new Map([
            [']','['],
            [')','('],
            ['}','{'],
        ]);
        const stack = [];
        for (const char of s) {
            if ((char == '[') || (char == '(') || (char == '{')) {
                stack.push(char);
            } else {
                if (parentheses.get(char) !== stack.pop()) {
                    return false;
                }
            }
        }
        return stack.length == 0;
    }
}
