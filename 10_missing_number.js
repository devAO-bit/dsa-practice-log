function missingNumber(nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum  = 0;

    for(let num of nums) {
        actualSum += num
    }

    return expectedSum - actualSum
}

console.log(missingNumber([3, 0, 1]))