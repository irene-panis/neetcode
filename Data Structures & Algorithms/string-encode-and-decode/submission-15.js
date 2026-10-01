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
        console.log(str);
        let i = 0;
        let lengthStart = 0;
        let res = [];

        while (i < str.length) {
            while (str[i] !== '#') {
                i++;
            }
            const length = Number(str.slice(lengthStart, i));
            i++;
            const decoded = str.slice(i, i + length);
            res.push(decoded);
            i += length;
            lengthStart = i;
        }
        return res;
    }
}
