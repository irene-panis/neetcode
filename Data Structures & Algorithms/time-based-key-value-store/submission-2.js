class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.get(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let values = this.keyStore.get(key);
        if (!values) return "";

        let l = 0;
        let r = values.length - 1;
        let result = "";

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const [storedTimestamp, storedValue] = values[mid];
            if (storedTimestamp <= timestamp) {
                result = storedValue;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return result;

    }
}
