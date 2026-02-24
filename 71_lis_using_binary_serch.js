var lengthOfLIS = function(nums) {
    let tails = []

    for(let num of nums) {
        let left = 0;
        let right = tails.length

        while(left < right) {
            let mid = Math.floor((left + right) / 2)
            if(tails[mid] < num){
                left = mid + 1
            } else {
                right = mid
            }
        }
        tails[left] = num
    }
    return tails.length
}

let nums = [10,9,2,5,3,7,101,18]

console.log(lengthOfLIS(nums))