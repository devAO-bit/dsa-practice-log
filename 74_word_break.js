var wordBreak = function(s, wordDict) {
    let wordSet = new Set(wordDict);
    let dp = new Array(s.length + 1).fill(false)

    dp[0] = true
    for(let i = 1; i <= s.length; i++) {
        for(let j = 0; j < i; j++) {
            if(dp[j] && wordSet.has(s.substring(j, i))){
                dp[i] = true
            }
        }
    }
    return dp[s.length]
}

let s = "applepenapple"
let wordDict = ["apple","pen"]

console.log(wordBreak(s, wordDict))