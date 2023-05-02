/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    const result = [];
  
    function backtrack(left, right, str) {
      if (left === n && right === n) {
        result.push(str);
        return;
      }
  
      if (left < n) {
        backtrack(left + 1, right, str + '(');
      }
  
      if (right < left) {
        backtrack(left, right + 1, str + ')');
      }
    }
  
    backtrack(0, 0, '');
  
    return result;
  }
  