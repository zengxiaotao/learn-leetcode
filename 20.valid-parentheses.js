/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (35.85%)
 * Total Accepted:    515.3K
 * Total Submissions: 1.4M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 *
 *
 * Input: "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: "(]"
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: "([)]"
 * Output: false
 *
 *
 * Example 5:
 *
 *
 * Input: "{[]}"
 * Output: true
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];

  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    if (c === '(') {
      arr1.push(c);
    } else if (c === ')') {
      if (!arr1.length) return false;
      arr1.pop();
    } else if (c === '{') {
      arr2.push(c);
    } else if (c === '}') {
      if (!arr2.length) return false;
      arr2.pop();
    } else if (c === '[') {
      arr3.push(c);
    } else {
      if (!arr3.length) return false;
      arr3.pop();
    }
  }
  return ![arr1, arr2, arr3].some(v => v.length);
};

console.log(isValid('()[]{}'));
