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
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            const lengthStart = i;

            while (str[i] !== '#') {
                i++;
            }

            const length = Number(str.slice(lengthStart, i));
            i++;
            const decoded = str.slice(i, i + length);
            res.push(decoded);
            i += length;
        }
        return res;
    }
}
