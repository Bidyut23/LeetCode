/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    const dfs = (currentPermutation, usedIndexes) => {
        if (currentPermutation.length === nums.length) {
            result.push(currentPermutation);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (usedIndexes.has(i)) {
                continue;
            }
            
            const newPermutation = [...currentPermutation, nums[i]];
            const newUsedIndexes = new Set(usedIndexes).add(i);
            dfs(newPermutation, newUsedIndexes);
        }
    };
    
    dfs([], new Set());
    
    return result; 
};