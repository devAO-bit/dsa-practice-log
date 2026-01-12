function searchRange(nums, target) {
    function findFirst() {
        let left = 0, right = nums.length - 1;
        let index = -1;

        while(left <= right) {
            let mid = Math.floor((left + right) / 2)

            if(nums[mid] === target) {
                index = mid;
                right = mid - 1; // Move left
            } else if(nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return index;
    }

    function findLast() {
        let left = 0; right = nums.length - 1;
        let index = -1;

        while(left <= right){
            let mid = Math.floor((left + right) / 2)

            if(nums[mid] === target) {
                index = mid;
                left = mid + 1; // move right
            } else if(nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } 
        return index;
    }

    return [findFirst(), findLast()]
}

const nums = [5,7,7,8,8,10] 
const target = 8

console.log(searchRange(nums, target))

// Time Complexity O(log n) Space O(1)