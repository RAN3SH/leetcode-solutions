# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return root

        def dfs(node):
            if not node:
                return node
            leftSaved = node.left
            rightSaved = node.right

            node.left = dfs(rightSaved)
            node.right = dfs(leftSaved)
            return node

        return dfs(root)
