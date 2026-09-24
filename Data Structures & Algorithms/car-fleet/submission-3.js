class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = new Map(); // pair our position + speed for each car
        const stack = []; // stack for tracking fleets

        // create our map storing pos-speed pairs
        for (let i = 0; i < position.length; i++) {
            cars.set(position[i], speed[i]);
        }
        // sort by position in desc order
        const sortedCars = [...cars].sort((a, b) => b[0] - a[0]);

        for (let i = 0; i < sortedCars.length; i++) {
            const arrivalTime = ((target - sortedCars[i][0]) / sortedCars[i][1]);
            stack.push(arrivalTime); // calc arrival time for car, push to stack
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
