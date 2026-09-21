/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {TreeNode}
     */
    mergeTrees(root1, root2) {
        if (!root1) return root2;
        if (!root2) return root1;

        let stack = [[root1, root2]];

        while (stack.length) {
            let [node1, node2] = stack.pop();
            if (!node1 || !node2) continue;

            node1.val += node2.val;

            if (node1.left && node2.left) {
                stack.push([node1.left, node2.left]);
            } else if (!node1.left) {
                node1.left = node2.left;
            }

            if (node1.right && node2.right) {
                stack.push([node1.right, node2.right]);
            } else if (!node1.right) {
                node1.right = node2.right;
            }
        }

        return root1;
    }
}
