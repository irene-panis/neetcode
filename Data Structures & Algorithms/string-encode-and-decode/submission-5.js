class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = '';
        for (const str of strs) {
            string = string + str.length + '#' + str;
        }
        return string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = [];
        let i = 0;
        while (i < str.length) {
            let j = str.indexOf('#', i);
            let length = Number(str.slice(i, j));
            const start = j + 1;
            const end = Number(start) + Number(length);
            const sliced = str.slice(start, end);
            arr.push(sliced);
            i = end;
        }
        return arr;
    }
}
