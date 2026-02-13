function fibonaaci(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;

    return fibonaaci(n-1) + fibonaaci(n-2)
}

console.log("Using Recursion: ",fibonaaci(6))
// Time complexity ver bad which is O(2^n)

function fibonaaci_number(n, memo = {}) {
    if (n in memo )return memo[n];

    if (n === 0) return 0;
    if (n === 1) return 1;

    memo[n] = fibonaaci_number(n-1, memo) + fibonaaci_number(n- 2, memo)
    return memo[n]
}

console.log("Using memoziaton: ", fibonaaci_number(6))
// time complexity is O(n) Space is O(n)

function fibonaaci_iterative(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0; 
    let curr = 1;

    for(let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

console.log("Using iterative method: ", fibonaaci_iterative(10))
// time and space complexity is O(n) and O(1)