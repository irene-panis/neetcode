class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top = 0;
        let bot = matrix.length - 1;
        while (top <= bot) {
            const row = Math.floor((top + bot) / 2);
            if (target > matrix[row][matrix[row].length - 1]) {
                top = row + 1;
            } else if (target < matrix[row][0]) {
                bot = row - 1;
            } else {
                break;
            }
        }
        if (top > bot) return false;
        let l = 0;
        let r = matrix[0].length - 1;
        const chosenRow = Math.floor((top + bot) / 2);
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (target > matrix[chosenRow][mid]) {
                l = mid + 1;
            } else if (target < matrix[chosenRow][mid]) {
                r = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}