var rob = function(nums){
    if(nums.length === 1) return nums[0];

    function robLinear(arr) {
        let prev1 = 0;
        let prev2 = 0;

        for(let num of arr) {
            let temp = Math.max(prev1, prev2 + num)
            prev2 = prev1
            prev1 = temp
        }
        return prev1
    }

    let case1 = robLinear(nums.slice(0, nums.length - 1));
    let case2 = robLinear(nums.slice(1))

    return Math.max(case1, case2)
}

console.log(rob([1, 2, 3]))