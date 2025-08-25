class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (!root) return root;
        return dfs(root);
    }

private:
    TreeNode* dfs(TreeNode* node) {
        if (!node) return node;

        TreeNode* leftSaved = node->left;
        TreeNode* rightSaved = node->right;

        node->left = dfs(rightSaved);
        node->right = dfs(leftSaved);
        return node;
    }
};
