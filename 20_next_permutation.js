var nextPermutation = function(nums) {
    let n = nums.length;
    let i = n - 2;

    while(i >= 0 && nums[i] >= nums[i+1]) {
        i--;
    }

    if(i >= 0) {
        let j = n - 1;
        while(nums[j] <= nums[i]) {
            j--;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

     reverse(nums, i + 1, n - 1);

     return nums
}

function reverse(nums, left, right) {
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    return nums
}


console.log(nextPermutation([1,2,3]))