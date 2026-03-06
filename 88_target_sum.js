var findTargetSumWays = function(nums, target) {
    let totalSum = nums.reduce((a, b) => a + b, 0)

    if((target + totalSum) % 2 !== 0) return 0;
    if(Math.abs(target) >totalSum) return 0;

    let P = (target + totalSum) / 2;

    let dp = new Array(P + 1).fill(0);

    dp[0] = 1;

    for(let num of nums) {
        for(let i = P; i >= num; i--) {
            dp[i] += dp[i - num]
        }
    }
    return dp[P]
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))