class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operands = [];
        for (const token of tokens) {
            if (token === '+') {
                const right = operands.pop();
                const left = operands.pop();
                operands.push(left + right);
            } else if (token === '-') {
                const right = operands.pop();
                const left = operands.pop();
                operands.push(left - right);
            } else if (token === '*') {
                const right = operands.pop();
                const left = operands.pop();
                operands.push(left * right);
            } else if (token === '/') {
                const right = operands.pop();
                const left = operands.pop();
                operands.push(Math.trunc(left / right)); // returns integer
            } else {
                operands.push(Number(token));
            }
      }
      return operands.pop();
    }
}
