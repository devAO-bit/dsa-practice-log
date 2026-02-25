var wordBreak = function(s, wordDict) {
    let wordSet = new Set(wordDict)
    let memo = {}

    function dfs(start) {
        if(start === s.length) return true
        if(memo[start] !== undefined) return memo[start]

        for(let end = start + 1; end <= s.length; end++) {
            if(wordSet.has(s.substring(start, end)) &&
        dfs(end)) {
            memo[start] = true
            return true
        }
        }
        memo[start]= false
        return false
    }
    return dfs(0)
}


let s = "applepenapple"
let wordDict = ["apple","pen"]

console.log(wordBreak(s, wordDict))