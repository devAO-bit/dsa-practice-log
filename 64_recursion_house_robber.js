var rob = function(nums) {
    let memo = {};

    function helper(i) {
        if(i >= nums.length) return 0;
        if(memo[i] !== undefined) return memo[i];

        let robCurrent = nums[i] + helper(i + 2);
        let skipCurrent = helper(i + 1);

        memo[i] = Math.max(robCurrent, skipCurrent);
        return memo[i];
    }
    return helper(0)
}

console.log(rob([1, 2, 3, 1]))

// time complexity: O(n)
// Space Complexity: O(n)