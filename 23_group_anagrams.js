var groupAnagrams = function(strs) {
    let map = new Map();

    for (let word of strs) {
        let count = new Array(26).fill(0);

        for (let char of word) {
            count[char.charCodeAt(0) - 97]++;
        }

        let key = count.join('#');

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    }

    return Array.from(map.values());
};

let strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))