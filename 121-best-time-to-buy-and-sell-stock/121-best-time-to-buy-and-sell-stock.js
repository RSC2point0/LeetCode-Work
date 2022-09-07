/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //iterat thr prices
        //subtract each buy $ from sell price and compare prof
    //return max
    let max = 0;
    let min = prices[0];
    for(let i = 0; i < prices.length; i++){
        let sellPrice = prices[i];
        max = Math.max(sellPrice - min, max);
        //reacalc the lowest possible buy price
        min = Math.min(prices[i], min);
    }
    return max;
};