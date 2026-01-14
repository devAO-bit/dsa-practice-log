function rotate(nums, k) {
    const n = nums.length;
    k = k % n;

    reverse(nums, 0, n - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k , n -1)

    return nums;
}

function reverse(arr, left, right) {
    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))