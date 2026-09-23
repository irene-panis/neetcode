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

        const currentRow = Math.floor((top + bot) / 2);
        let l = 0;
        let r = matrix[currentRow].length - 1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (target > matrix[currentRow][mid]) {
                l++;
            } else if (target < matrix[currentRow][mid]) {
                r--;
            } else {
                return true;
            }
        }
        return false;
    }
}
