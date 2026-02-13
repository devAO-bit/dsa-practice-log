function generateParenthesis(n) {
    let result = []

    function backtrack(current, open, close) {
        // Base case
        if(current.length === 2 * n) {
            result.push(current)
            return
        }

        // ADD "("
        if(open < n) {
            backtrack(current + "(", open + 1, close)
        }

        // ADd ")"
        if(close < open) {
            backtrack(current + ")", open, close + 1)
        }
    }
    backtrack("", 0, 0)
    return result;
}

console.log(generateParenthesis(4));
