// solution without division (time n space 1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let resultProduct = [1];
    let leftProductCurrent = 1;
    let rightProductCurrent = 1;
    // fill in right product array in result array
    for (let j = nums.length - 2; j >= 0; j--) {
        rightProductCurrent *= nums[j+1]
        resultProduct.push(rightProductCurrent);
    }
    resultProduct.reverse()
    // update result product array
    for (let i = 1; i < nums.length; i++) {
        leftProductCurrent *= nums[i-1];
        resultProduct[i] = leftProductCurrent * resultProduct[i]
    }
    return resultProduct;
};

console.log(productExceptSelf([-1,1,0,-3,3]))

// solution WITH DIVISTION
/**
 * @param {number[]} nums (time n space 1)
 * @return {number[]}
 */
var productExceptSelfWithDivision = function(nums) {
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

console.log(productExceptSelfWithDivision([-1,1,0,-3,3]))

