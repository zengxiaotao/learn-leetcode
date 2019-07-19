/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.58%)
 * Likes:    3885
 * Dislikes: 370
 * Total Accepted:    596.6K
 * Total Submissions: 2.2M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 *
 * Example 1:
 *
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: "cbbd"
 * Output: "bb"
 *
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  let max = '';
  let temp = '';
  for (let i = 0; i < s.length - 1; i += 1) {
    let k;
    const cur = s[i];
    const after = s[i + 1];
    if (cur === after) {
      temp += cur;
      temp += after;
      k = i + 2;
      while (s[k] === cur) {
        temp += cur;
        k += 1;
      }
    } else {
      temp += cur;
      k = i + 1;
    }
    let j = i - 1;
    while (j >= 0 && k < s.length && s[j] === s[k]) {
      temp += s[k];
      temp = s[j] + temp;
      j -= 1;
      k += 1;
    }
    if (temp.length > max.length) {
      max = temp;
    }
    temp = '';
  }

  return max;
};
