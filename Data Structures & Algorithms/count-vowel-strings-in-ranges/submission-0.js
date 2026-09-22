class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const arr = [0];
        const solution = [];
        let count = 0;
        for (const word of words) {
            const startsWithVowel = vowels.includes(word[0]);
            const endsWithVowel = vowels.includes(word[word.length - 1]);
            if (startsWithVowel && endsWithVowel) {
                count++;
            }
            arr.push(count);
        }
        for (const query of queries) {
            solution.push(arr[query[1] + 1] - arr[query[0]]);
        }
        return solution;
    }
}
