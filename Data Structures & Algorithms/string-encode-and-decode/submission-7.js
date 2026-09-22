class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for (const str of strs) {
            encoded = encoded + str.length + '#' + str;
        }
        console.log(encoded);
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const arr = [];
        let i = 0;
        while (i < str.length) {
            const lengthStart = i;
            while (str[i] !== '#') {
                i++;
            }
            const length = Number(str.slice(lengthStart, i));
            i++;
            const decoded = str.slice(i, i + length);
            arr.push(decoded);
            i += length;
        }
        return arr;
    }
}
