function bookAllocation(pages, students) {
    if(students > pages.length) return -1;

    let low = Math.max(...pages)
    let high = pages.reduce((a,b) => a + b, 0)
    let answer = -1;

    while(low <= high) {
        let mid = Math.floor((low + high)/2)
        
        if(isPossible(pages, students, mid)) {
            answer = mid;
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return answer
}

function isPossible(pages, students, maxPages) {
    let studentCount = 1;
    let currentSum = 0;

    for(let page of pages) {
        if(currentSum + page > maxPages) {
            studentCount++;
            currentSum = page;

            if(studentCount > students) return false
        } else {
            currentSum += page
        }
    }
    return true
}

let pages = [12, 34, 67, 90]
let students = 2

console.log(bookAllocation(pages, students))