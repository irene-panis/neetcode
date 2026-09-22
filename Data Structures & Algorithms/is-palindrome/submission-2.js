class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphaNum(s.charAt(l))) {
                l++;
            }
            while (r > l && !this.isAlphaNum(s.charAt(r))) {
                r--;
            }
            if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    isAlphaNum(c) {
        let charCode = c.charCodeAt(0);
        return (
            (65 <= charCode && charCode <= 90) ||
            (97 <= charCode && charCode <= 122) ||
            (48 <= charCode && charCode <= 57)
        );
    }
}
