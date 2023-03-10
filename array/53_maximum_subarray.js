// Solution (dynamic programming) time n space 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    nums.slice(1).forEach(num => {
        currentSum = Math.max(num, currentSum + num)
        maxSum = Math.max(maxSum, currentSum);
    })
    
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-3,-4,5,-1,2,-4,6,-1]));
