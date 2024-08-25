/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let lo = 0;
        let hi = n;
        
        do {
            const mid = Math.floor(lo + (hi - lo) / 2);
            
            if (!isBadVersion(mid)) {
                lo = mid + 1
            } else {
                hi = mid
            }
        } while (lo < hi)
        
        return lo;
    };
};