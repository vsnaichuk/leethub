function isalnum(c: string) {
    const cc = c.charCodeAt(0);
    return (cc >= 'A'.charCodeAt(0) && cc <= 'Z'.charCodeAt(0))||
            (cc >= 'a'.charCodeAt(0) && cc <= 'z'.charCodeAt(0)) || 
            (cc >= '0'.charCodeAt(0) && cc <= '9'.charCodeAt(0))
}

function isPalindrome(s: string): boolean {
    let l = 0, r = s.length - 1;
    
    while (l < r) {
        while (l < r && !isalnum(s[l])) l++;
        while (r > l && !isalnum(s[r])) r--;
        
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }
        l++;
        r--;
    }
    return true;
};