/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
    const result = [];
    const queue = [];
    
    if (root === null) return result;
    
    queue.push(root);
    while(queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let n = queue.shift();
            if (i === size - 1) result.push(n.val);
            if (n.left !== null) queue.push(n.left);
            if (n.right !== null) queue.push(n.right);
        }
    }
    
    return result;
};