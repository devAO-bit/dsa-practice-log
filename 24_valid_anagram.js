var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let count = new Array(26).fill(0)

    for(let char of s) {
        count[char.charCodeAt(0) - 97]++;
    }

    for(let char of t) {
        let idx = char.charCodeAt(0) - 97;
        count[idx]--;
        if(count[idx] < 0) return false;
    }
    return true;
}

const s = 'anagram';
const t = "nagaram";

console.log(isAnagram(s, t))