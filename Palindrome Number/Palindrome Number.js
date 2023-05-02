/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false; // negative numbers are not palindromic
   
   let num = x;
   let reversed = 0;
   while (num > 0) {
       reversed = reversed * 10 + (num % 10);
       num = Math.floor(num / 10);
   }
   return x === reversed;
};