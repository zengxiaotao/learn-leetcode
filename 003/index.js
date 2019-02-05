/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;
    let max = 0;
    let prev = [];
    while(s.length > 0) {
      for (let i = 0;i<s.length;i++) {
        if (!prev.includes(s[i])) {
          prev.push(s[i])
        } else {
          break;
        }
      }
      max = Math.max(max, prev.length);
      prev = [];
      s = s.slice(1)
    }

    return max
};

console.log(lengthOfLongestSubstring('pwwkew'))
