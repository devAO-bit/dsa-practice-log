var coinChange = function(coins, amount) {
    let memo = {}

    function dfs(remain) {
        if(remain === 0) return 0;
        if(remain < 0) return Infinity
        if(memo[remain] !== undefined) return memo[remain]

        let minCoins = Infinity

        for(let coin of coins) {
            let result = dfs(remain- coin)
            minCoins= Math.min(minCoins, result + 1)
        }

        memo[remain] = minCoins;
        return minCoins;
    }

    let res =dfs(amount);
    return res === Infinity ? -1 : res;
}

let coins = [1, 2, 5]
let amount = 11

console.log(coinChange(coins, amount))