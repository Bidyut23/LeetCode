/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) { // left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // search left half
            } else {
                left = mid + 1; // search right half
            }
        } else { // right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // search right half
            } else {
                right = mid - 1; // search left half
            }
        }
    }

    return -1; // target not found
};

