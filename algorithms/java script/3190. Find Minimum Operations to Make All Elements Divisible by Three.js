var minimumOperations = function (nums) {
    nums = nums.map(x => x % 3)
    nums = nums.filter(x => x !== 0)
    return nums.length
};
