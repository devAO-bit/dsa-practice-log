var maxProduct = function(nums) {
    let maxEnding = nums[0]
    let minEnding = nums[0]
    let result = nums[0]

    for(let i = 1; i < nums.length; i++) {
        let curr = nums[i]
        if(curr < 0) {
            [maxEnding, minEnding] = [minEnding, maxEnding];
        }

        maxEnding = Math.max(curr, maxEnding * curr)
        minEnding = Math.max(curr, minEnding * curr)

        result = Math.max(result, maxEnding)
    }
    return result
}

let nums = [2,3,-2,4]
console.log(maxProduct(nums))