/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for( let i=0; i<nums.length; i++){
         for(j=nums.length; j>= i+1; j--){
            if( nums[i] == nums[j]){
                nums.splice(i,1) //The splice() method adds and/or removes array elements.
                                //The splice() method overwrites the original array.


            }
         }
    }
};