/* eslint-disable for-direction */
/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 *
 * https://leetcode.com/problems/valid-mountain-array/description/
 *
 * algorithms
 * Easy (34.62%)
 * Likes:    159
 * Dislikes: 42
 * Total Accepted:    22.4K
 * Total Submissions: 63.2K
 * Testcase Example:  '[2,1]'
 *
 * Given an array A of integers, return true if and only if it is a valid
 * mountain array.
 *
 * Recall that A is a mountain array if and only if:
 *
 *
 * A.length >= 3
 * There exists some i with 0 < i < A.length - 1 such that:
 *
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 *
 *
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: [2,1]
 * Output: false
 *
 *
 *
 * Example 2:
 *
 *
 * Input: [3,5,5]
 * Output: false
 *
 *
 *
 * Example 3:
 *
 *
 * Input: [0,3,2,1]
 * Output: true
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 0 <= A.length <= 10000
 * 0 <= A[i] <= 10000
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  if (A.length < 3) return false;
  let mount = -1;
  for (let i = 1; i < A.length; i += 1) {
    if (A[i] > A[i - 1]) {
      // eslint-disable-next-line no-continue
      continue;
    } else if (A[i] === A[i - 1]) {
      return false;
    } else {
      mount = i;
      break;
    }
  }
  if (mount === 1 || mount === A.length) return false;
  for (let j = mount; j < A.length; j += 1) {
    if (A[j] >= A[j - 1]) return false;
  }
  return true;
};

// todo: need more
