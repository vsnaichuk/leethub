/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next) return head;
    
    let tail = head;
    let length = 1;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    tail.next = head;
    k = length - k % length;

    for (let i = 0; i < k; i++) {
        tail = tail.next;
        head = tail.next;
    }
    tail.next = null;
    
    return head;
};