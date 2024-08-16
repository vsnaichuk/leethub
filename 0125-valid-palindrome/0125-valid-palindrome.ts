function alphanum(c: string) {
    return ('a'.charAt(0) <= c.charAt(0) && c.charAt(0) <= 'z'.charAt(0))
            || ('0'.charAt(0) <= c.charAt(0) && c.charAt(0) <= '9'.charAt(0))
}

function reverseStr(s: string) {
    let res = ""
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];            
    }
    return res;
}

function isPalindrome(s) {
  let newStr = '';

  for (const c of s.toLowerCase()) {
    newStr += alphanum(c) ? c : "";
  }

  return newStr === reverseStr(newStr);
}