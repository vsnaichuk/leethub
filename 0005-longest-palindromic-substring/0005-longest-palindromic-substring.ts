function longestPalindrome(s: string): string {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(s, i, i);
        let even = expandAroundCenter(s, i, i + 1);

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
};

function expandAroundCenter(s: string, left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}