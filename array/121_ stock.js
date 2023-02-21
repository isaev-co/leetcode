/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max_profit = 0;
    let leftIndex = 0;
    let rightIndex = 1;
    while (rightIndex < prices.length) {
        const profit = prices[rightIndex] - prices[leftIndex];
        if (profit > 0) {
            max_profit = Math.max(profit, max_profit);
        } else {
            leftIndex=rightIndex;
        }
        rightIndex++;
    }
    return max_profit;
};

console.log(maxProfit([7,1,5,3,6,4]));
