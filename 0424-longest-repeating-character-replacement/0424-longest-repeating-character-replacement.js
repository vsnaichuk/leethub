/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const map = [26]
    let largestCount = 0, beg = 0, maxlen = 0;
    for(let end = 0; end < s.length; end++){
        const c = s[end]
        map[c] = (map[c] || 0) + 1
 
        largestCount = Math.max(largestCount, map[c])
      
        if(end - beg + 1 - largestCount > k){
            map[s[beg]] -= 1
            beg += 1
        }
        maxlen = Math.max(maxlen, end - beg + 1); 
    }
    return maxlen;     
};