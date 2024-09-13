function isalnum(c: string) {
    const charCode = c.charCodeAt(0) 
    return (
        'a'.charCodeAt(0) <= charCode && charCode <= 'z'.charCodeAt(0) ||
        'A'.charCodeAt(0) <= charCode && charCode <= 'Z'.charCodeAt(0) ||
        '0'.charCodeAt(0) <= charCode && charCode <= '9'.charCodeAt(0)
    )
}

function isPalindrome(s: string): boolean {
    const n = s.length;
    
    let l = 0, r = n - 1;
    while (l < r) {
        while (l < r && !isalnum(s[l])) l++;
        while (l < r && !isalnum(s[r])) r--
        
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }
        l++;
        r--;
    }
    return true;
};