var minWindow = function(s, t) {
    if (t.length > s.length) return "";

    let need = new Map();
    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let window = new Map();
    let left = 0, right = 0;
    let formed = 0;
    let required = need.size;

    let minLen = Infinity;
    let start = 0;

    while (right < s.length) {
        let char = s[right];
        window.set(char, (window.get(char) || 0) + 1);

        if (need.has(char) && window.get(char) === need.get(char)) {
            formed++;
        }

        while (left <= right && formed === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            let leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);

            if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};

// 👇 ADD THIS
console.log(minWindow("ADOBECODEBANC", "ABC"));
