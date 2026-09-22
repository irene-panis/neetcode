class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    getClosingBracket(c) {
        if (c == '(') return ')';
        if (c == '{') return ('}');
        if (c == '[') return (']');
    }
    isOpeningBracket(c) {
        if (c == '(') return true;
        if (c == '{') return true;
        if (c == '[') return true;
        return false;
    }
    isValid(s) {
        const arr = s.split('');
        const stack = [];
        for (const ch of arr) {
            if (this.isOpeningBracket(ch)) {
                stack.push(ch);
            } else {
                const popped = stack.pop();
                if (ch !== this.getClosingBracket(popped)) {
                    return false;
                }
            }
        }
        if (stack.length !== 0) return false;
        return true;
    }
}
