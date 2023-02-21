// Solution 1 (brut force)  (time n2 space 1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum1 = function(nums, target) {
    for (let i=0; i < nums.length; i++) {
        for (let j=1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i!==j ) return [i,j]
        }
    }
};

console.log(twoSum1([2,7,14,15], 16))

// Solution 2 (hash map) (time n space n)
const twoSum2 = function(nums, target) {
    const data = new Map();
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i];
        if (data.has(remainder)) {
            result.push(i)
            result.push(data.get(remainder))
            break;
        }
        data.set(nums[i], i)
    }
    return result;
};

console.log(twoSum2([2,7,14,15], 16))

// Solution for sorted array (sorting) (time n space 1)
const twoSumSorted = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] > target) right -= 1;
        if (nums[left] + nums[right] < target) left += 1;
        if (nums[left] + nums[right] === target) return [left, right]
    }
};
console.log(twoSumSorted([2,7,11,15], 22))