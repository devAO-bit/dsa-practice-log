var maxProfit = function(prices) {
    if(prices.length <=  1) return 0;

    let hold = -prices[0]
    let sold = 0
    let rest = 0

    for(let i = 1; i < prices.length; i++) {
        let prevHold = hold
        let prevSold = sold
        let prevRest = rest

        hold = Math.max(prevHold,prevRest- prices[i])
        sold = prevHold + prices[i]
        rest = Math.max(prevRest, prevSold)
    }

    return Math.max(sold, rest)
}


let prices = [1,2,3,0,2]
console.log(maxProfit(prices))