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

            // find the '#'
            while (str[i] !== '#') {
                i++;
            }

            // parse everything before '#' as the length
            const length = Number(str.slice(lengthStart, i));

            // skip '#'
            i++;

            // read exactly 'length' characters
            const decoded = str.slice(i, i + length);
            arr.push(decoded);

            // move to the next encoded string
            i += length;
        }

        return arr;
    }
}
