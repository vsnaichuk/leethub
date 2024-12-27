/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    const queue = [{ node: root, index: 0 }]
    let maxWidth = 0
    
    while (queue.length > 0) {
        const size = queue.length
        
        let minIndex = Number.MAX_SAFE_INTEGER
        let maxIndex = Number.MIN_SAFE_INTEGER

        let levelStartIndex = queue[0].index
        
        for (let i = 0; i < size; i++) {
            const { node, index } = queue.shift()
            
            minIndex = Math.min(minIndex, index)
            maxIndex = Math.max(maxIndex, index)
            
            const normalizedIndex = index - levelStartIndex 
            
            if (node.left) {
                queue.push({ node: node.left, index: 2 * normalizedIndex })
            }
            
            if (node.right) {
                queue.push({ node: node.right, index: (2 * normalizedIndex) + 1 })
            }
        }

        maxWidth = Math.max(maxWidth, maxIndex - minIndex + 1)
    }
    
    return maxWidth
};