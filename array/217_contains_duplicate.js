// solution 1 (time n space n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = new Set(nums)
    return  numsSet.size !== nums.length
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))

// solution 2 (time n space less than n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = new Set()
    for (let i=0; i < nums.length; i++) {
        if(numsSet.has(nums[i])) return true;
        numsSet.add(nums[i]);
    }
    return false;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))

// solution 3 brut force (time n2 space 1)