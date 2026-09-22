class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let max = min;
        let value = 0;
        for (let i = 0; i < prices.length; i++) {
            if (i != prices.length - 1 && prices[i] <= min) { // found new min
                max = min = prices[i];
            } else if (prices[i] > max) { // found new max
                max = prices[i];
            }
            value = max - min > value ? max - min : value; // check for value change after each iteration
        }
        return value;
    }
}
