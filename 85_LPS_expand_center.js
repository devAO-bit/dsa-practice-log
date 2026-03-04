var longestPalindrome = function(s) {
    if(s.length < 2) return s;

    let start = 0;
    let maxLen = 0;

    const expand = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for(let i = 0; i < s.length; i++) {
        let len1 = expand(i, i)
        let len2 = expand(i, i+1)
        let len = Math.max(len1, len2)

        if(len > maxLen) {
            maxLen = len;
            start = i - Math.floor((len - 1) / 2)
        }
    }
    return s.substring(start, start + maxLen)
}

console.log(longestPalindrome("babad"))