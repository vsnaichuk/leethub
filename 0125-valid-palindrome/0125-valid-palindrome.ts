function reverseStr(s: string) {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
        res+=s[i]
    }
    return res;
}


function isalnum(c: string) {
    const cc = c.charCodeAt(0);
    return (cc >= 'A'.charCodeAt(0) && cc <= 'Z'.charCodeAt(0))||
            (cc >= 'a'.charCodeAt(0) && cc <= 'z'.charCodeAt(0)) || 
            (cc >= '0'.charCodeAt(0) && cc <= '9'.charCodeAt(0))
}

function isPalindrome(s: string): boolean {
    let newStr = "";
    for (const c of s) {
        if (isalnum(c)) {
            newStr += c.toLowerCase();
        }            
    }
    return newStr === reverseStr(newStr)
};