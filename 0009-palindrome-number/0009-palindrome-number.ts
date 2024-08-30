function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x >= 0 && x < 10) return true;
    
    const str = String(x)
    let l = 0, r = str.length - 1;
    
    while (l < r) {
        if (str[l] !== str[r]) 
            return false;
        l++;
        r--;
    }
    return true
};