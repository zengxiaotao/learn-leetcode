/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 *
 * https://leetcode.com/problems/single-number-ii/description/
 *
 * algorithms
 * Medium (45.09%)
 * Total Accepted:    157.6K
 * Total Submissions: 349.4K
 * Testcase Example:  '[2,2,3,2]'
 *
 * Given a non-empty array of integers, every element appears three times
 * except for one, which appears exactly once. Find that single one.
 *
 * Note:
 *
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 *
 * Example 1:
 *
 *
 * Input: [2,2,3,2]
 * Output: 3
 *
 *
 * Example 2:
 *
 *
 * Input: [0,1,0,1,0,1,99]
 * Output: 99
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var sum = function (nums) {
  return nums.reduce((a, b) => a + b, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const uniqueNums = Array.from(new Set(nums));

  return (3 * sum(uniqueNums) - sum(nums)) / 2;
};
