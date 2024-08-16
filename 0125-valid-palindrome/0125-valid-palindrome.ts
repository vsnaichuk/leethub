function reverseStr(s: string) {
    let res = ""
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];            
    }
    return res;
}

function isPalindrome(s: string): boolean {
  const chars = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return chars === reverseStr(chars)
};