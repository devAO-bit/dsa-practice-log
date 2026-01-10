function twoSum(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;

        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(current, i);
    }
    return [];
}

let nums = [2, 7, 11, 15]
let target = 9;

console.log(twoSum(nums, target));