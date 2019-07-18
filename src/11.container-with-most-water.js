/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (42.58%)
 * Likes:    3514
 * Dislikes: 454
 * Total Accepted:    400.8K
 * Total Submissions: 882K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 *
 * Note: You may not slant the container and n is at least 2.
 *
 *
 *
 *
 *
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49.
 *
 *
 *
 * Example:
 *
 *
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 *
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea1 = function (height) {
  if (height.length === 2) return Math.min(...height);
  let max = 0;
  for (let i = 0; i < height.length - 1; i += 1) {
    const cur = height[i];
    for (let j = i + 1; j < height.length; j += 1) {
      max = Math.max(max, Math.min(cur, height[j]) * (j - i));
    }
  }
  return max;
};

var maxArea = function (height) {
  if (height.length === 2) return Math.min(...height);

  let i = 0;
  let j = height.length - 1;
  let max = 0;
  let cur = 0;
  while (i < j) {
    if (height[i] < height[j]) {
      cur = height[i] * (j - i);
      i += 1;
    } else {
      cur = height[j] * (j - i);
      j -= 1;
    }
    max = Math.max(max, cur);
  }
  return max;
};

// todo: need explain
