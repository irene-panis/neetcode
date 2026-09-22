class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = new Map();
        const stack = [];
        for (let i = 0; i < position.length; i++) {
            cars.set(position[i], speed[i]);
        }
        const sortedCars = [...cars].sort((a, b) => b[0] - a[0])
        for (let i = 0; i < sortedCars.length; i++) {
            stack.push((target - sortedCars[i][0]) / sortedCars[i][1]);
            if ((stack.length >= 2) && (stack[stack.length - 1] <= stack[stack.length - 2])) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
