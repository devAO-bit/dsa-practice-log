function findMedianSortedArrays(nums1,nums2) {
    // Ensure the num1 is smaller
    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1)
    }

    let m = nums1.length;
    let n = nums2.length;

    let left = 0;
    let right = m;

    while(left <= right) {
        let partition1 = Math.floor((left + right) / 2);
        let partition2 = Math.floor((m + n + 1) / 2) - partition1;

        let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        let minRight1 = partition1 === m ? Infinity : nums1[partition1];

        let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        let minRight2 = partition2 === n ? Infinity : nums2[partition2]

        // valid partition
        if(maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if((m + n) % 2 === 0) {
                return (
                    Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)
                ) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2)
            }
        } else if(maxLeft1 > minRight2) {
            right = partition1 - 1;
        } else {
            left = partition1 + 1;
        }
    }
    throw new Error("Invalid Input")
}

nums1 = [1,2]
nums2 = [3,4]

console.log(findMedianSortedArrays(nums1, nums2))

// We use binary search on the smaller array, so time complexity is O(log(min(m, n))).
//We don’t use extra data structures, so space complexity is O(1).