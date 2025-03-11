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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  const stack: ListNode[] = [] 
  let node = head
  if (!node) return
  while (node) {
    stack.push(node)
    node = node.next
  }

  const len = stack.length
  node = head
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0)
      node.next = stack.shift()
    else
      node.next = stack.pop()
    node = node.next
  }
  node.next = null
};