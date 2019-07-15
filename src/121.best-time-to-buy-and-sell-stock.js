/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let ret = 0;
  let min = Infinity;

  for (let i = 0; i < prices.length; i += 1) {
    const price = prices[i];
    if (price < min) min = price;
    ret = Math.max(ret, price - min);
  }

  return ret;
};

// [7, 1, 5, 3, 6, 4]
// 每遍历到一个变量，拿到之前的最小值
// 用当前的值减去最小值即可。
