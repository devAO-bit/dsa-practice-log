var longestPalindrome = function(s) {
    let n = s.length;
    let dp = Array.from({length:n}, () => new Array(n).fill(false))

    let start = 0;
    let maxLen = 1;

    for(let len = 1; len <= n; len++) {
        for(let i = 0; i <= n - len; i++) {
            let j = i + len - 1

            if(s[i] === s[j]) {
                if(len <= 2 || dp[i+1][j-1]) {
                    dp[i][j] = true

                    if(len > maxLen) {
                        maxLen = len;
                        start = i;
                    }
                }
            }
        }
    }
    return s.substring(start, start + maxLen)
}

console.log(longestPalindrome("babad"))