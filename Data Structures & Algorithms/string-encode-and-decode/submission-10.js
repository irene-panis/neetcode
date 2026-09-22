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
        const arr = [];
        let i = 0; // our place in the string

        while (i < str.length) {
            // IMPORTANT: declare lengthStart = i;
            const lengthStart = i;

            // iterate until we reach delimiter #
            while (str[i] !== '#') {
                i++;
            }

            // grab length and convert to number
            const length = Number(str.slice(lengthStart, i));
            i++;

            const decoded = str.slice(i, i + length);
            arr.push(decoded);
            i += length;
        }
        return arr;
    }
}
