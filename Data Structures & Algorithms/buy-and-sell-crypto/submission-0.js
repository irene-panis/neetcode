class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0]; // first number, minimum buying price
        let max = min; // maximum buying price, currently it is min
        let value = 0; // profit
        for (let i = 0; i < prices.length; i++) {
            if (i != prices.length - 1 && prices[i] <= min) { // found a new min
                min = max = prices[i];
            } else if (prices[i] > max) { // found a new max
                max = prices[i];
            }
            value = max - min > value ? max - min : value;
        }
        return value;
    }
}
