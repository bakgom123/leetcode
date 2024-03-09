/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices: number[]): number {
    let profit: number = 0;
    let lowestPrice: number = prices[0];

    for (const price of prices) {
        if (price < lowestPrice) {
            lowestPrice = price;
        }
        profit = Math.max(profit, price - lowestPrice);
    }

    return profit;
}