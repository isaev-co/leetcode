// solution WITH DIVISTION
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeros = 0;
    let zeroIndex = undefined;
    let commonProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros++;
            zeroIndex = i;
            if (zeros > 1) return nums.map( el => 0);
        }
        else {
            commonProduct = commonProduct * nums[i];
        }
    }
    if (zeroIndex || zeroIndex === 0) return nums.map((el, index) => index === zeroIndex ? commonProduct : 0);
    return nums.map(el => commonProduct / el);
};

console.log(productExceptSelf([-1,1,0,-3,3]))