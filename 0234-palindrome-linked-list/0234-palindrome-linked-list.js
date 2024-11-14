/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // Store all values from the linked list 
    // in an array
    let found = [];
    while (head) {
        found.push(head.val);
        head = head.next;
    }

    // Check if the list is a palindrome
    let l = 0;
    let r = found.length - 1;
    while (l <= r) {
        if (found[l] !== found[r]) {
            return false;
        }
        l++; 
        r--;
    }

    return true;
};