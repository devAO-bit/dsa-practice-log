var rob = function(nums) {
    function helper(i) {
        if(i >= nums.length) return 0;

        let robCurrent = nums[i] + helper(i + 2)
        let skipCurrent = helper(i + 1)

        return Math.max(robCurrent, skipCurrent)
    }
    return helper(0)
}

console.log(rob([1, 2, 3, 1]))