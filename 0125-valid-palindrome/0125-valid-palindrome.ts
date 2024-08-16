function isPalindrome(s: string): boolean {
  const chars = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return chars === [...chars].reverse().join('')
};