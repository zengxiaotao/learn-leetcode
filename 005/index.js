/**
 * 
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

 /**
  * example
  * Input: 120
    Output: 21 

    Input: 123
    Output: 321
  */


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const sign = x < 0 ? -1 : 1;

  const arr = `${x * sign}`.split('').reverse();

  if (arr[0] === '0') arr.shift();

  const ret =  Number(arr.join('')) * sign;

  if (ret < -1 * Math.pow(2, 31) || ret > (Math.pow(2, 31) - 1)) return 0;
  return ret;
};
