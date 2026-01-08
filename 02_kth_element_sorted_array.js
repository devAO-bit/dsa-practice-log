function kthElement(nums1, nums2, k) {
    if(nums1.length > nums2.length) {
        return kthElement(nums2, nums1, k)
    }

    let m = nums1.length;
    let n = nums2.length;

    let left = Math.max(0, k - n)
    let right = Math.min(k, m)

    while(left <= right) {
        let cut1 = Math.floor((left + right) / 2)
        let cut2 = k - cut1;

        let left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1]
        let left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1]

        let right1 = cut1 === m ? Infinity : nums1[cut1]
        let right2 = cut2 === n ? Infinity : nums2[cut2]

        if(left <= right2 && left2 <= right1) {
            return Math.max(left1, left2)
        } else if(left1 > right2) {
            right = cut1 - 1
        } else {
            left = cut1 + 1
        }
    } 
    return -1
}

let nums1 = [2, 3, 6, 7, 9]
let nums2 = [1, 4, 8, 10]
k = 5

console.log(kthElement(nums1, nums2, k))

// Time: O(log(min(m, n)))

// Space: O(1)