
class TimeMap {
    constructor() {
        this.map = {};
    }


    set(key, value, timestamp) {
        const bucket = this.map[key] || [];

        this.map[key] = bucket;

        bucket.push([value, timestamp]);
    }


    get(key, timestamp, value = '', bucket = this.map[key] || []) {
        let [left, right] = [0, bucket.length - 1];

        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            const [guessValue, guessTimestamp] = bucket[mid];

            const isTargetGreater = guessTimestamp <= timestamp;
            if (isTargetGreater) {
                value = guessValue;
                left = mid + 1;
            }

            const isTargetLess = timestamp < guessTimestamp;
            if (isTargetLess) right = mid - 1;
        }

        return value;
    }
}