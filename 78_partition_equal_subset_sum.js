var carPartition = function (nums) {
    let totalSum = nums.reduce((a, b) => a + b, 0)

    if (totalSum % 2 !== 0) return false

    let target = totalSum / 2
    let dp = new Array(target + 1).fill(false)

    dp[0] = true

    for(let num of nums) {
        for(let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num]
        }
    }
    return dp[target]
}

let nums = [1, 5, 11, 5]
console.log(carPartition(nums))