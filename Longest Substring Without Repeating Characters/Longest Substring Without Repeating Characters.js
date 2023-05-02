/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    const uniqueChars = new Set();

    while (end < s.length) {
        const currentChar = s.charAt(end);
        if (!uniqueChars.has(currentChar)) {
            uniqueChars.add(currentChar);
            end++;
            maxLength = Math.max(maxLength, end - start);
        } else {
            uniqueChars.delete(s.charAt(start));
            start++;
        }
    }

    return maxLength;
}
