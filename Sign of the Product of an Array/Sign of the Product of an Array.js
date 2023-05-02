/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let negatives = 0;
  let hasZero = false;

  for (const num of nums) {
    if (num < 0) {
      negatives++;
    } else if (num === 0) {
      hasZero = true;
    }
  }

  if (hasZero) {
    return 0;
  } else if (negatives % 2 === 0) {
    return 1;
  } else {
    return -1;
  }
};